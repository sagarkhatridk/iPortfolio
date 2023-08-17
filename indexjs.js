const d = document;
const q = (e, n = d) => n.querySelector(e);
const qa = (e, n = d) => n.querySelectorAll(e);
const parent = q('.brandSliderContainer');

const pausehandler = function(e) {
  qa('.brandSlider').forEach(n => {
    let pttn = new RegExp('mouse*');
    let evt = (pttn.test(e.type) == true) ? 'mouseover' : 'touchstart';
    let state = e.type == evt ? 'paused' : 'running';
    n.style.setProperty('animation-play-state', state);
  });
};

parent.addEventListener('mouseover', pausehandler);
parent.addEventListener('mouseout', pausehandler);
parent.addEventListener('touchstart', pausehandler);
parent.addEventListener('touchend', pausehandler);