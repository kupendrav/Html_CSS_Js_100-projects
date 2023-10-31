let bgMusic = document.getElementById('touch');

function playMusic() {
  let audio = new Audio('./assets/audio/olave.mp3')
  audio.play()
}
bgMusic.addEventListener("click", playMusic);
// gsap.from('#touch',{
//   x:100,
// })

gsap.set("#touch", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo("#touch", "x", {duration: 0.6, ease: "power3"}),
    yTo = gsap.quickTo("#touch", "y", {duration: 0.6, ease: "power3"});

window.addEventListener("mousemove", e => {
  // xTo(e.pageX);
  // yTo(e.pageY);
  xTo(e.clientX);
  yTo(e.clientY);
});