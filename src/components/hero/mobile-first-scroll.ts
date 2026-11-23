import { gsap } from "gsap";

export interface MobileRevealState {
  started: boolean;
  completed: boolean;
  time: number;
  textTime: number;
}

export function mobileFirstScroll({ media, wrapper, firstLine, secondLine, state, greeting, idea, bonsai, decoded, failed }: {
  media: HTMLVideoElement;
  wrapper: HTMLElement;
  firstLine: HTMLElement | null;
  secondLine: HTMLElement | null;
  state: MobileRevealState;
  greeting: string;
  idea: string;
  bonsai: string;
  decoded: (value: boolean) => void;
  failed: () => void;
}) {
  let disposed = false;
  let pending = false;
  let playing = false;
  let abortRetried = false;
  let resumeTime: number | null = state.time;
  let previousScroll = window.scrollY;
  let scrollTravel = 0;
  const text = { greeting: greeting.length, idea: 0 };
  const timeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
  function write(message: string, count: number) {
    const lines = message.slice(0, Math.round(count)).split("\n");
    if (firstLine) firstLine.textContent = lines[0] ?? "";
    if (secondLine) secondLine.textContent = lines[1] ?? "";
  }
  timeline.to(text, { greeting: 0, duration: .25, onUpdate: () => write(greeting, text.greeting) })
    .to(text, { idea: idea.length, duration: .65, onUpdate: () => write(idea, text.idea) });
  function visible() {
    const bounds = wrapper.getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < window.innerHeight;
  }
  function overflow() { return wrapper.dataset.overflow === "true"; }
  function allowed() { return !disposed && !overflow() && state.started && !state.completed && visible() && !document.hidden; }
  function poster() {
    const image = wrapper.querySelector("picture img");
    if (image) image.setAttribute("src", bonsai);
  }
  function blocked() {
    if (disposed || state.completed) return;
    media.pause();
    state.completed = true;
    timeline.progress(1).pause();
    poster();
    decoded(false);
  }
  function play() {
    if (!allowed()) { media.pause(); timeline.pause(); return; }
    if (timeline.time() >= .25) write(idea, text.idea);
    else write(greeting, text.greeting);
    if (playing && !media.paused) timeline.play();
    if (pending || !media.paused || media.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    if (resumeTime !== null) {
      // Restore an interrupted mobile visit once, never seek on scroll.
      try { media.currentTime = Math.min(resumeTime, Math.max(0, media.duration - .005)); resumeTime = null; }
      catch { return; }
    }
    pending = true;
    media.play().then(() => {
      pending = false;
      if (!disposed && !allowed()) media.pause();
    }).catch((error: unknown) => {
      pending = false;
      if (disposed) return;
      if (error instanceof DOMException && error.name === "AbortError") {
        // A visibility pause can cancel a pending play. Retry once if already back.
        if (allowed() && !abortRetried) { abortRetried = true; play(); }
      } else if (allowed()) blocked();
    });
  }
  function sync() {
    if (disposed) return;
    if (allowed()) play();
    else {
      media.pause();
      timeline.pause();
      if (overflow()) write(greeting, greeting.length);
      else if (state.completed) write(idea, idea.length);
    }
  }
  function onPlaying() {
    if (!allowed()) { media.pause(); return; }
    playing = true;
    abortRetried = false;
    timeline.play();
    if (media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
  }
  function onData() {
    if (playing && allowed() && media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
    sync();
  }
  function onEnded() {
    if (disposed || !state.started || state.completed) return;
    state.completed = true;
    state.time = media.currentTime;
    timeline.progress(1).pause();
    poster();
    if (media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
  }
  function onError() { if (!disposed) { media.pause(); failed(); } }
  function onScroll() {
    const current = window.scrollY;
    const delta = current - previousScroll;
    previousScroll = current;
    if (state.started || state.completed) return;
    if (overflow() || !visible() || document.hidden) { scrollTravel = 0; return; }
    scrollTravel = delta > 0 ? scrollTravel + delta : 0;
    if (scrollTravel < 8) return;
    state.started = true;
    window.removeEventListener("scroll", onScroll);
    play();
  }
  media.pause();
  media.playbackRate = .75;
  media.loop = false;
  decoded(false);
  if (state.completed) { poster(); write(idea, idea.length); }
  else {
    timeline.time(state.textTime);
    if (!state.started) write(greeting, greeting.length);
  }
  const observer = new IntersectionObserver(sync, { threshold: .001 });
  observer.observe(wrapper);
  const layoutObserver = new MutationObserver(sync);
  layoutObserver.observe(wrapper, { attributes: true, attributeFilter: ["data-overflow"] });
  media.addEventListener("playing", onPlaying);
  media.addEventListener("loadeddata", onData);
  media.addEventListener("canplay", sync);
  media.addEventListener("seeked", sync);
  media.addEventListener("ended", onEnded);
  media.addEventListener("error", onError);
  document.addEventListener("visibilitychange", sync);
  if (!state.started && !state.completed) window.addEventListener("scroll", onScroll, { passive: true });
  sync();
  return () => {
    disposed = true;
    state.time = state.started && !state.completed ? media.currentTime : state.time;
    state.textTime = timeline.time();
    media.pause();
    media.playbackRate = 1;
    timeline.kill();
    observer.disconnect();
    layoutObserver.disconnect();
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", sync);
    media.removeEventListener("playing", onPlaying);
    media.removeEventListener("loadeddata", onData);
    media.removeEventListener("canplay", sync);
    media.removeEventListener("seeked", sync);
    media.removeEventListener("ended", onEnded);
    media.removeEventListener("error", onError);
    write(greeting, greeting.length);
  };
}
