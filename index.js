var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")
var current = document.getElementById("current")

var audio = document.createElement("audio")
document.body.appendChild(audio)

var currentSong = 0;

var song1 = new Audio("dig.mp3")
var song2 = new Audio("prick.mp3")
var song3 = new Audio("burn.mp3")
var song4 = new Audio("pressure.mp3")
var song5 = new Audio("read.mp3")


class Jukebox{
  constructor(){
    this.catalog = [song1, song2, song3, song4, song5]
  }
  playing(){
      this.catalog[currentSong].play()
  }
  pausing(){
    this.catalog[currentSong].pause()
  }
  stopping(){
    this.catalog[currentSong].pause()
    this.catalog[currentSong].currentTime =0;
  }
  forwarding(){
    this.catalog[currentSong].pause()
    if(currentSong == this.catalog.length-1){
      currentSong =0;
    this.catalog[currentSong].play()
  }else{
    currentSong++
    this.catalog[currentSong].play()
  }
  }
}

var myJuke = new Jukebox()

play.addEventListener("click", function(){
  myJuke.playing()
  if(currentSong == 0){
    current.innerHTML = "Now Playing: Dig";
  }else if(currentSong == 1){
    current.innerHTML = "Now Playing: Prick";
  }else if(currentSong == 2){
    current.innerHTML = "Now Playing: Burn";
  }else if(currentSong == 3){
    current.innerHTML = "Now Playing: Pressure";
  }else if(currentSong == 4){
    current.innerHTML = "Now Playing: Read";
  }
})

pause.addEventListener("click", function(){
  myJuke.pausing()
  if(currentSong == 0){
    current.innerHTML = "Paused: Dig";
  }else if(currentSong == 1){
    current.innerHTML = "Paused: Prick";
  }else if(currentSong == 2){
    current.innerHTML = "Paused: Burn";
  }else if(currentSong == 3){
    current.innerHTML = "Paused: Pressure";
  }else if(currentSong == 4){
    current.innerHTML = "Paused: Read";
  }
})

stop.addEventListener("click", function(){
  myJuke.stopping()
  current.innerHTML = "Juke Stopped"
})

ff.addEventListener("click", function(){
  myJuke.forwarding()
  if(currentSong == 0){
    current.innerHTML = "Now Playing: Dig";
  }else if(currentSong == 1){
    current.innerHTML = "Now Playing: Prick";
  }else if(currentSong == 2){
    current.innerHTML = "Now Playing: Burn";
  }else if(currentSong == 3){
    current.innerHTML = "Now Playing: Pressure";
  }else if(currentSong == 4){
    current.innerHTML = "Now Playing: Read";
  }
})

