import { gsap } from "gsap";

export interface MobileRevealState {
  started: boolean;
  completed: boolean;
  time: number;
  textTime: number;
  direction?: "forward" | "reverse";
}

export function mobileFirstScroll({ media, wrapper, firstLine, secondLine, state, greeting, idea, bonsai, sculpture, decoded, failed }: {
  media: HTMLVideoElement;
  wrapper: HTMLElement;
  firstLine: HTMLElement | null;
  secondLine: HTMLElement | null;
  state: MobileRevealState;
  greeting: string;
  idea: string;
  bonsai: string;
  sculpture: string;
  decoded: (value: boolean) => void;
  failed: () => void;
}) {
  let disposed = false;
  let pending = false;
  let playing = false;
  let abortRetried = false;
  // Restore the saved native frame even after completion: desktop may have sought it.
  let resumeTime: number | null = state.time;
  let previousScroll = window.scrollY;
  let scrollTravel = 0;
  let reverseFrame = 0;
  let reverseClock = 0;
  let reverseTarget = state.time;
  const text = { greeting: greeting.length, idea: 0 };
  const ERASE_DURATION = .65;
  const timeline = gsap.timeline({ paused: true, defaults: { ease: "none" }, onReverseComplete: settleReverse });
  function write(message: string, count: number) {
    const lines = message.slice(0, Math.round(count)).split("\n");
    if (firstLine) firstLine.textContent = lines[0] ?? "";
    if (secondLine) secondLine.textContent = lines[1] ?? "";
  }
  function restoreText() {
    if (timeline.time() >= ERASE_DURATION) write(idea, text.idea);
    else write(greeting, text.greeting);
  }
  timeline.to(text, { greeting: 0, duration: ERASE_DURATION, onUpdate: restoreText })
    .to(text, { idea: idea.length, duration: 1.65, onUpdate: restoreText });
  function visible() {
    const bounds = wrapper.getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < window.innerHeight;
  }
  function overflow() { return wrapper.dataset.overflow === "true"; }
  function usable() { return !disposed && !overflow() && visible() && !document.hidden; }
  function forward() { return usable() && state.started && state.direction === "forward" && !state.completed; }
  function poster(source: string) { wrapper.querySelector("picture img")?.setAttribute("src", source); }
  function stopReverse() {
    cancelAnimationFrame(reverseFrame);
    reverseFrame = 0;
    reverseClock = 0;
  }
  function settleReverse() {
    if (disposed || state.direction !== "reverse" || timeline.time() > .001 || reverseTarget > .003 || media.seeking || media.currentTime > .006) return;
    stopReverse();
    timeline.pause();
    state.started = false;
    state.completed = false;
    state.direction = undefined;
    state.time = 0;
    state.textTime = 0;
    playing = false;
    scrollTravel = 0;
    poster(sculpture);
    write(greeting, greeting.length);
  }
  function reverseTick(now: number) {
    reverseFrame = 0;
    if (!usable() || state.direction !== "reverse") { reverseClock = 0; return; }
    if (media.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(media.duration)) { reverseClock = 0; return; }
    const elapsed = reverseClock ? Math.min(.05, (now - reverseClock) / 1000) : 0;
    reverseClock = now;
    reverseTarget = Math.max(0, reverseTarget - elapsed * .75);
    // Keep only the latest target while the decoder completes its current seek.
    if (!media.seeking && Math.abs(media.currentTime - reverseTarget) > .003) {
      try { media.currentTime = reverseTarget; } catch { reverseClock = 0; return; }
    }
    if (reverseTarget > 0) reverseFrame = requestAnimationFrame(reverseTick);
    else settleReverse();
  }
  function scheduleReverse() {
    if (!reverseFrame && usable() && state.direction === "reverse") reverseFrame = requestAnimationFrame(reverseTick);
  }
  function blocked() {
    if (!forward()) return;
    media.pause();
    state.completed = true;
    poster(bonsai);
    decoded(false);
    // The slower text sequence remains independent of the film.
    timeline.play();
  }
  function play() {
    if (!forward()) return;
    if (playing && !media.paused) timeline.play();
    if (pending || !media.paused || media.seeking || media.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    pending = true;
    media.play().then(() => {
      pending = false;
      if (!disposed && !forward()) media.pause();
    }).catch((error: unknown) => {
      pending = false;
      if (disposed) return;
      if (error instanceof DOMException && error.name === "AbortError") {
        if (forward() && !abortRetried) { abortRetried = true; play(); }
      } else if (forward()) blocked();
    });
  }
  function sync() {
    if (disposed) return;
    if (!usable()) {
      media.pause();
      timeline.pause();
      stopReverse();
      if (overflow()) write(greeting, greeting.length);
      return;
    }
    restoreText();
    if (state.started && resumeTime !== null) {
      if (media.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(media.duration)) return;
      try {
        media.currentTime = Math.min(resumeTime, Math.max(0, media.duration - .005));
        if (state.direction === "reverse") reverseTarget = media.currentTime;
        resumeTime = null;
      }
      catch { return; }
    }
    if (state.direction === "reverse") {
      media.pause();
      timeline.reverse();
      scheduleReverse();
    } else if (state.started) {
      if (state.completed) timeline.play();
      else play();
    }
  }
  function onPlaying() {
    if (!forward()) { media.pause(); return; }
    playing = true;
    abortRetried = false;
    timeline.play();
    if (media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
  }
  function onSeeked() {
    if (usable() && state.direction === "reverse" && media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
    sync();
    settleReverse();
  }
  function onEnded() {
    if (disposed || !state.started || state.direction !== "forward" || state.completed) return;
    state.completed = true;
    state.time = media.currentTime;
    poster(bonsai);
    if (media.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) decoded(true);
    // Do not complete or pause the independently paced typing here.
    sync();
  }
  function onError() { if (!disposed) { media.pause(); failed(); } }
  function onScroll() {
    const current = window.scrollY;
    const delta = current - previousScroll;
    previousScroll = current;
    if (!usable()) { scrollTravel = 0; return; }
    if (current <= 2 && delta < 0 && state.started && state.direction !== "reverse") {
      media.pause();
      state.direction = "reverse";
      state.completed = false;
      reverseTarget = resumeTime ?? media.currentTime;
      reverseClock = 0;
      scrollTravel = 0;
      poster(sculpture);
      sync();
      return;
    }
    if (state.direction === "forward") return;
    scrollTravel = delta > 0 ? scrollTravel + delta : 0;
    if (scrollTravel < 8) return;
    stopReverse();
    state.started = true;
    state.direction = "forward";
    state.completed = false;
    scrollTravel = 0;
    sync();
  }
  media.pause();
  media.playbackRate = .75;
  media.loop = false;
  decoded(false);
  timeline.time(state.textTime);
  if (state.started) state.direction ??= "forward";
  else write(greeting, greeting.length);
  if (state.completed) poster(bonsai);
  const observer = new IntersectionObserver(sync, { threshold: .001 });
  observer.observe(wrapper);
  const layoutObserver = new MutationObserver(sync);
  layoutObserver.observe(wrapper, { attributes: true, attributeFilter: ["data-overflow"] });
  media.addEventListener("playing", onPlaying);
  media.addEventListener("loadeddata", sync);
  media.addEventListener("canplay", sync);
  media.addEventListener("seeked", onSeeked);
  media.addEventListener("ended", onEnded);
  media.addEventListener("error", onError);
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("scroll", onScroll, { passive: true });
  sync();
  return () => {
    disposed = true;
    state.time = media.currentTime;
    state.textTime = timeline.time();
    media.pause();
    media.playbackRate = 1;
    stopReverse();
    timeline.kill();
    observer.disconnect();
    layoutObserver.disconnect();
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", sync);
    media.removeEventListener("playing", onPlaying);
    media.removeEventListener("loadeddata", sync);
    media.removeEventListener("canplay", sync);
    media.removeEventListener("seeked", onSeeked);
    media.removeEventListener("ended", onEnded);
    media.removeEventListener("error", onError);
    write(greeting, greeting.length);
  };
}
