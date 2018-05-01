var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")

var audio = document.createElement("audio")
document.body.appendChild(audio)

var catalog = [];
var currentSong = 0;
// function Audio(title, artist, file){
//   this.title = title;
//   this.artist = artist;
//   this.file = file;
// }
var song1 = new Audio(//"burn", "bacchae",
"burn.mp3")
catalog.push(song1)
var song2 = new Audio(//"dig", "bacchae",
"dig.mp3")
catalog.push(song2)
var song3 = new Audio(//"pressure", "bacchae",
"pressure.mp3")
catalog.push(song3)


class Jukebox{

  playing(){
      catalog[currentSong].play()
      song.innerHTML = currentSong.title +"-"+ currentSong.artist
  }
  pausing(){
    catalog[currentSong].pause()
  }
  stopping(){
    catalog[currentSong].pause()
    catalog[currentSong].currentTime =0;
  }
  forwarding(){
    catalog[currentSong].pause()
    if(currentSong == catalog.length-1){
      currentSong =0;
    catalog[currentSong].play()
  }else{
    currentSong++
    catalog[currentSong].play()
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
