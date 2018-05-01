var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")

var catalog = ["be my baby - the ronettes", "can't hurry love - the supremes", "why do fools fall in love - frankie lymon"]

var mySongs = new Audio([""]);

class Jukebox{

  playing(){
    for(let i=0; i<mySongs.length;i++){
      song.innerHTML = mySongs[i].play()
    }
  }
  pausing(){
    song.innerHTML = "song paused"
  }
  stopping(){
    song.innerHTML = "song stopped"
  }
  forwarding(){
    for(let i=0;i<mySongs.length; i++){
    song.innerHTML = mySongs[i-1]
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
