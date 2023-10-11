let play = document.getElementById("sapta");
let stop = document.getElementById("sapta");
function playMusic() {
  let audio = new Audio("./static/assets/sea.mp3");
  audio.play()

}
//   function stopMusic(){
//     audio.stop()
// }

play.addEventListener("click", playMusic);
// stop.addEventListener("click", stopMusic);

gsap.to('.content',{
  y:200,
  duration:2,
  repeat:-1,
  yoyo:true,
})
gsap.to('#sapta',{
  rotation:90,
  repeat:-1,
  duration:2,
  yoyo:true,
}
)