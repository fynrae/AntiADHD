(function blackoutVideo() {
  const video = document.querySelector('.html5-video-container video');
  if (video) {
    video.style.filter = 'brightness(0)';
    video.style.backgroundColor = 'black';
    console.log('Video blacked out');
  } else {
    console.warn('Video element not found');
  }
})();
