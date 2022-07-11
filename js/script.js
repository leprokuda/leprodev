
document.querySelector('.skills__container').onmousemove = e => {

    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
  
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};

function menuOnClick() {
  document.getElementById("burger__bar").classList.toggle("change-menu");
  document.getElementById("nav").classList.toggle("change-menu");
  document.getElementById("burger__background").classList.toggle("change-background");
}



