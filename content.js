let pauseLockedUntil = 0;
let pauseLockActive = false;

function preventEarlyPause(video) {
  const now = Date.now();
  if (pauseLockActive && now < pauseLockedUntil) {
    video.play();
    console.log("[YouTube Pause Lock] Pause blocked until:", new Date(pauseLockedUntil).toLocaleTimeString());
  } else {
    pauseLockActive = false;
    console.log("[YouTube Pause Lock] Pause allowed");
  }
}

function setupVideoListener(video) {
  if (video._pauseLockSetup) return;
  video._pauseLockSetup = true;

  video.addEventListener('pause', () => {
    preventEarlyPause(video);
  });

  video.addEventListener('play', () => {
    pauseLockedUntil = Date.now() + 60000;
    pauseLockActive = true;
    console.log("[YouTube Pause Lock] Pause locked for 1 minute");
  });
}

const observer = new MutationObserver(() => {
  const video = document.querySelector('video');
  if (video) {
    setupVideoListener(video);
  }
});

observer.observe(document.body, { childList: true, subtree: true });
