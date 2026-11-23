type Direction = "forward" | "reverse";

export interface MobileFilmState {
  progress: number;
  direction: Direction | null;
  desired: Direction | null;
  finished: boolean;
  time: number;
}

export function mobileNativeFilm({ forward, reverse, wrapper, stage, firstLine, secondLine, state, greeting, idea, sculpture, bonsai, failed }: {
  forward: HTMLVideoElement;
  reverse: HTMLVideoElement;
  wrapper: HTMLElement;
  stage: HTMLElement;
  firstLine: HTMLElement | null;
  secondLine: HTMLElement | null;
  state: MobileFilmState;
  greeting: string;
  idea: string;
  sculpture: string;
  bonsai: string;
  failed: () => void;
}) {
  const films = { forward, reverse };
  let disposed = false;
  let generation = 0;
  let pending: number | null = null;
  let abortRetried = false;
  let restore = state.direction !== null && !state.finished;
  let previousScroll = window.scrollY;
  let downTravel = 0;
  let leftHero = false;
  let frameOwner: HTMLVideoElement | null = null;
  let frameRequest = 0;
  let animationRequest = 0;

  function visible() {
    const bounds = stage.getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < window.innerHeight;
  }
  function usable() { return !disposed && wrapper.dataset.overflow !== "true" && visible() && !document.hidden; }
  function write(message: string, count: number) {
    const lines = message.slice(0, Math.round(count)).split("\n");
    if (firstLine) firstLine.textContent = lines[0] ?? "";
    if (secondLine) secondLine.textContent = lines[1] ?? "";
  }
  function renderText() {
    if (wrapper.dataset.overflow === "true") { write(greeting, greeting.length); return; }
    if (state.progress < .22) write(greeting, greeting.length * (1 - state.progress / .22));
    else write(idea, idea.length * Math.min(1, (state.progress - .22) / .78));
  }
  function poster(progress: number) {
    wrapper.querySelector("picture img")?.setAttribute("src", progress >= 1 ? bonsai : sculpture);
  }
  function stopSamples() {
    if (frameOwner && frameRequest) frameOwner.cancelVideoFrameCallback(frameRequest);
    cancelAnimationFrame(animationRequest);
    frameRequest = 0;
    animationRequest = 0;
    frameOwner = null;
  }
  function sample(direction: Direction, time: number) {
    const film = films[direction];
    if (!usable() || state.direction !== direction || state.finished || film.paused || film.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(film.duration)) return;
    const progress = Math.min(1, Math.max(0, time / film.duration));
    state.progress = direction === "forward" ? progress : 1 - progress;
    state.time = time;
    // Keep the outgoing decoded frame until this film has produced a frame.
    film.style.opacity = "1";
    films[direction === "forward" ? "reverse" : "forward"].style.opacity = "0";
    renderText();
  }
  function samples() {
    if (!usable() || state.finished || !state.direction || frameRequest || animationRequest) return;
    const direction = state.direction;
    const film = films[direction];
    if (film.paused) return;
    if (typeof film.requestVideoFrameCallback === "function") {
      frameOwner = film;
      frameRequest = film.requestVideoFrameCallback((_now, metadata) => {
        frameRequest = 0;
        if (disposed || state.direction !== direction) return;
        sample(direction, metadata.mediaTime);
        samples();
      });
    } else {
      // Read playback time only; this fallback never seeks the media.
      animationRequest = requestAnimationFrame(() => {
        animationRequest = 0;
        if (disposed || state.direction !== direction) return;
        sample(direction, film.currentTime);
        samples();
      });
    }
  }
  function begin(direction: Direction) {
    forward.pause();
    reverse.pause();
    stopSamples();
    generation++;
    pending = null;
    abortRetried = false;
    state.direction = direction;
    state.finished = false;
    state.time = 0;
    restore = true;
  }
  function blocked(direction: Direction) {
    forward.pause();
    reverse.pause();
    stopSamples();
    state.progress = direction === "forward" ? 1 : 0;
    state.finished = true;
    state.desired = direction;
    forward.style.opacity = "0";
    reverse.style.opacity = "0";
    poster(state.progress);
    renderText();
  }
  function sync() {
    if (disposed) return;
    if (!usable()) {
      forward.pause();
      reverse.pause();
      stopSamples();
      if (!visible()) leftHero = true;
      renderText();
      return;
    }
    renderText();
    if (state.finished) {
      const endpoint = state.desired === "forward" ? 1 : 0;
      if (!state.desired || state.progress === endpoint) return;
      begin(state.desired);
    }
    const direction = state.direction;
    if (!direction) return;
    const film = films[direction];
    if (film.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(film.duration)) return;
    if (restore) {
      // One setup seek per pass or breakpoint restore, never one per scroll/frame.
      try { film.currentTime = Math.min(state.time, Math.max(0, film.duration - .005)); restore = false; }
      catch { return; }
    }
    if (film.seeking || pending !== null) return;
    if (!film.paused) { samples(); return; }
    const token = generation;
    pending = token;
    film.play().then(() => {
      if (disposed || token !== generation) return;
      pending = null;
      if (!usable()) film.pause();
      else if (film.paused) sync();
      else samples();
    }).catch((error: unknown) => {
      if (disposed || token !== generation) return;
      pending = null;
      if (error instanceof DOMException && error.name === "AbortError") {
        if (usable() && !abortRetried) { abortRetried = true; sync(); }
      } else if (usable()) blocked(direction);
    });
  }
  function request(direction: Direction) {
    state.desired = direction;
    // A running pass finishes first; the latest deliberate request wins.
    sync();
  }
  function scroll() {
    const current = window.scrollY;
    const delta = current - previousScroll;
    previousScroll = current;
    if (!usable()) { if (!visible()) leftHero = true; downTravel = 0; return; }
    if (delta < 0 && (current <= 2 || leftHero)) {
      leftHero = false;
      downTravel = 0;
      request("reverse");
      return;
    }
    downTravel = delta > 0 ? downTravel + delta : 0;
    if (downTravel >= 8) { downTravel = 0; request("forward"); }
  }
  const cleanups: (() => void)[] = [];
  for (const direction of ["forward", "reverse"] as const) {
    const film = films[direction];
    film.pause();
    film.loop = false;
    film.playbackRate = .65;
    film.style.opacity = "0";
    const playing = () => {
      if (!usable() || state.direction !== direction || state.finished) { film.pause(); return; }
      abortRetried = false;
      samples();
    };
    const ended = () => {
      if (disposed || state.direction !== direction || state.finished) return;
      stopSamples();
      state.progress = direction === "forward" ? 1 : 0;
      state.time = film.currentTime;
      state.finished = true;
      poster(state.progress);
      renderText();
      sync();
    };
    const timeupdate = () => { if (typeof film.requestVideoFrameCallback !== "function") sample(direction, film.currentTime); };
    const error = () => { if (!disposed) { forward.pause(); reverse.pause(); stopSamples(); failed(); } };
    const events = { playing, ended, timeupdate, error, loadeddata: sync, canplay: sync, seeked: sync };
    for (const [name, handler] of Object.entries(events)) film.addEventListener(name, handler);
    cleanups.push(() => { for (const [name, handler] of Object.entries(events)) film.removeEventListener(name, handler); });
  }
  poster(state.progress);
  renderText();
  const observer = new IntersectionObserver(sync, { threshold: .001 });
  observer.observe(stage);
  const layoutObserver = new MutationObserver(sync);
  layoutObserver.observe(wrapper, { attributes: true, attributeFilter: ["data-overflow"] });
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("scroll", scroll, { passive: true });
  sync();
  return () => {
    disposed = true;
    generation++;
    if (state.direction && !state.finished) state.time = films[state.direction].currentTime;
    forward.pause();
    reverse.pause();
    stopSamples();
    for (const film of [forward, reverse]) { film.playbackRate = 1; film.style.removeProperty("opacity"); }
    for (const cleanup of cleanups) cleanup();
    observer.disconnect();
    layoutObserver.disconnect();
    document.removeEventListener("visibilitychange", sync);
    window.removeEventListener("scroll", scroll);
    write(greeting, greeting.length);
  };
}
