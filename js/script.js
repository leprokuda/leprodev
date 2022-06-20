document.querySelector('.section-skills__container').onmousemove = e => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
  };

  function menuOnClick() {
    document.getElementById("menu__bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu__background").classList.toggle("change-background");
  }