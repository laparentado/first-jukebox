var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")

class Jukebox{
  constructor(songName){
    this.songName = songName;
  }
  playing(){
    song.innerHTML = "this song is playing"
  }
  pausing(){

  }
  stopping(){

  }
  forwarding(){

  }
}

var myJuke = new Jukebox()

play.addEventListener("click" function(){
  myJuke.playing()

})

pause.addEventListener("click" function(){

})

stop.addEventListener("click" function(){

})

ff.addEventListener("click" function(){

})
