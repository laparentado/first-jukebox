var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")

var audio = document.createElement("audio")
document.body.appendChild(audio)

var currentSong = 0;

var song1 = new Audio("dig.mp3")
var song2 = new Audio("prick.mp3")
var song3 = new Audio("burn.mp3")
var song4 = new Audio("pressure.mp3")
var song5 = new Audio("read.mp3")

// function Song(title, artist, url){
//   this.title = title;
//   this.artist = artist;
//   this.url = url;
// }

// song1 = new Song()


class Jukebox{
  constructor(){
    this.catalog = [song1, song2, song3, song4, song5]
  }
  playing(){
      this.catalog[currentSong].play()
      song.innerHTML = currentSong
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
})

pause.addEventListener("click", function(){
  myJuke.pausing()
})

stop.addEventListener("click", function(){
  myJuke.stopping()
})

ff.addEventListener("click", function(){
  myJuke.forwarding()
})
