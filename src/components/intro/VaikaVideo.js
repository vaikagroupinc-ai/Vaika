export class VaikaVideo {
  constructor(container, callbacks = {}) {
    this.container = container;
    this.callbacks = Object.assign({
      onReady: () => {},
      onTimeUpdate: () => {},
      onEnded: () => {},
      onError: () => {}
    }, callbacks);

    this.video = null;
    this.duration = 7.8;
    this.init();
  }

  init() {
    this.video = document.createElement('video');
    this.video.className = 'vaika-intro-video';
    this.video.setAttribute('aria-hidden', 'true');
    this.video.setAttribute('playsinline', '');
    this.video.setAttribute('webkit-playsinline', '');
    this.video.setAttribute('preload', 'auto');
    this.video.muted = true;
    this.video.autoplay = true;

    const webmSource = document.createElement('source');
    webmSource.src = '/videos/VaikaLogoIntro.webm';
    webmSource.type = 'video/webm';

    this.video.appendChild(webmSource);

    this.video.addEventListener('loadedmetadata', () => {
      if (this.video && this.video.duration && !isNaN(this.video.duration)) {
        this.duration = this.video.duration;
      }
      this.callbacks.onReady(this.duration);
    });

    this.video.addEventListener('timeupdate', () => {
      if (this.video) {
        this.callbacks.onTimeUpdate(this.video.currentTime, this.duration);
      }
    });

    this.video.addEventListener('ended', () => {
      this.callbacks.onEnded();
    });

    this.video.addEventListener('error', (e) => {
      this.callbacks.onError(e);
    });

    this.container.appendChild(this.video);
  }

  pause() {
    if (this.video) this.video.pause();
  }

  dispose() {
    if (this.video) {
      this.video.pause();
      this.video.removeAttribute('src');
      this.video.load();
      if (this.video.parentNode) this.video.parentNode.removeChild(this.video);
      this.video = null;
    }
  }
}

