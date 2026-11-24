/** One bounded touch gate. It never moves the page or intercepts keyboard scrolling. */
export function mobileFirstSwipe({ stage, eligible, start, released }: {
  stage: HTMLElement;
  eligible: () => boolean;
  start: () => void;
  released: () => void;
}) {
  const previous = stage.style.getPropertyValue("touch-action");
  const priority = stage.style.getPropertyPriority("touch-action");
  let open = false;
  let holding = false;
  let finished = false;
  let touches = 0;
  let originX = 0;
  let originY = 0;
  let timeout: ReturnType<typeof setTimeout> | undefined;

  function bypass() {
    if (open) return;
    open = true;
    if (timeout !== undefined) clearTimeout(timeout);
    if (previous) stage.style.setProperty("touch-action", previous, priority);
    else stage.style.removeProperty("touch-action");
    stage.removeEventListener("touchstart", touchStart);
    stage.removeEventListener("touchmove", touchMove);
    window.removeEventListener("touchend", touchEnd);
    window.removeEventListener("touchcancel", touchEnd);
    released();
  }
  function touchStart(event: TouchEvent) {
    if (open) return;
    const control = event.target instanceof Element && event.target.closest("a, button, input, textarea, select, summary, [role='button'], [contenteditable='true']");
    if (!eligible() || control || event.touches.length !== 1) { bypass(); return; }
    touches = event.touches.length;
    originX = event.touches[0].clientX;
    originY = event.touches[0].clientY;
    // Never extend the same hold indefinitely, even if more touches arrive.
    timeout ??= setTimeout(bypass, 5500);
  }
  function touchMove(event: TouchEvent) {
    if (open || !touches) return;
    if (!eligible() || event.touches.length !== 1) { bypass(); return; }
    const x = event.touches[0].clientX - originX;
    const y = event.touches[0].clientY - originY;
    if (!holding && Math.abs(x) > Math.abs(y)) { bypass(); return; }
    if (!holding && y >= 0) return;
    // Armed touch-action prevents an early browser pan; this is the native fallback.
    if (event.cancelable) event.preventDefault();
    if (!holding && -y >= 6) {
      holding = true;
      start();
    }
  }
  function touchEnd(event: TouchEvent) {
    if (open || !touches) return;
    touches = event.touches.length;
    if (event.type === "touchcancel") { bypass(); return; }
    if (!touches && finished) bypass();
    else if (!touches && !holding && timeout !== undefined) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  }
  if (eligible()) {
    // Must be applied before touchstart: a pan decision cannot change mid-gesture.
    stage.style.setProperty("touch-action", "pan-x pinch-zoom");
    stage.addEventListener("touchstart", touchStart, { passive: true });
    stage.addEventListener("touchmove", touchMove, { passive: false });
    window.addEventListener("touchend", touchEnd, { passive: true });
    window.addEventListener("touchcancel", touchEnd, { passive: true });
  } else bypass();
  return {
    get holding() { return holding; },
    complete() {
      finished = true;
      // A decoded completion is no longer a stall; a held finger still owns its gesture.
      if (timeout !== undefined) { clearTimeout(timeout); timeout = undefined; }
      if (!touches) bypass();
    },
    bypass,
    dispose: bypass,
  };
}
