// Custom interactions and Hiro marker status banner.
AFRAME.registerComponent('ball-colour-toggle', {
  init: function () {
    const colours = ['#E63946', '#3A86FF', '#06D6A0', '#F4B942'];
    let i = 0;
    this.el.addEventListener('click', () => {
      i = (i + 1) % colours.length;
      this.el.setAttribute('color', colours[i]);
    });
  }
});

AFRAME.registerComponent('headlight-toggle', {
  init: function () {
    let on = false;
    const light = document.querySelector('#showroom-light');
    this.el.addEventListener('click', () => {
      on = !on;
      light.setAttribute('intensity', on ? 1.8 : 0.15);
      light.setAttribute('color', on ? '#FFF1A8' : '#77808A');
      this.el.setAttribute('color', on ? '#FFF1A8' : '#F4B942');
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('#hiro-marker');
  const status = document.querySelector('#status');
  marker.addEventListener('markerFound', () => {
    status.textContent = 'Hiro marker found — showroom ready!';
    status.classList.remove('waiting');
    status.classList.add('found');
  });
  marker.addEventListener('markerLost', () => {
    status.textContent = 'Marker not found';
    status.classList.remove('found');
    status.classList.add('waiting');
  });
});
