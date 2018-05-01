var play = document.getElementById("play")
var pause = document.getElementById("pause")
var stop = document.getElementById("stop")
var ff = document.getElementById("ff")
var song = document.getElementById("song")

var audio = document.createElement("audio")
document.body.appendChild(audio)


function Song(title, artist, file){
  this.title = title;
  this.artist = artist;
  this.file = file;
}

var song1 = new Song("dig", "bacchae", "dig.mp3")
var song2 = new Song("prick","bacchae","prick.mp3")
var song3 = new Song("burn","bacchae","burn.mp3")
var song4 = new Song("pressure","bacchae","pressure.mp3")
var song5 = new Song("read","bacchae","read.mp3")

var currentSong = 0;
var myAudio = new Audio();

class Jukebox{
  constructor(){
    this.catalog = [song1, song2, song3, song4, song5]
  }
  playing(){
      myAudio.src = this.catalog[currentSong].file
      myAudio.play()
      song.innerHTML = this.catalog[currentSong].title +"-"+ this.catalog[currentSong].artist
  }
  pausing(){
    myAudio.src = this.catalog[currentSong].file
    myAudio.pause()
    song.innerHTML = "paused"
  }
  stopping(){
    myAudio.src = this.catalog[currentSong].file
    myAudio.pause()
    myAudio.currentTime =0;
  }
  forwarding(){
    myAudio.src = this.catalog[currentSong].file
    myAudio.pause()
    // this.catalog[currentSong].file = 0
    // this.catalog[currentSong].file++
    myAudio.src = this.catalog[currentSong].file++
    myAudio.play()
  //   if(myAudio.src = this.catalog[currentSong].file == this.catalog.length-1){
  //     myAudio.src = this.catalog[currentSong].file =0;
  //   myAudio.src = this.catalog[currentSong].file
  //   myAudio.play()
  //   song.innerHTML = this.catalog[currentSong].title +"-"+ this.catalog[currentSong].artist
  // }else{
  //   myAudio.src = this.catalog[currentSong].file++
  //   // myAudio.src = this.catalog[currentSong].file
  //   myAudio.play()
  //   song.innerHTML = this.catalog[currentSong].title +"-"+ this.catalog[currentSong].artist
  // }
  }

  // forwarding(){
  //   this.catalog[currentSong].pause()
  //   if(currentSong == this.catalog.length-1){
  //     currentSong =0;
  //   this.catalog[currentSong].play()
  // }else{
  //   currentSong++
  //   this.catalog[currentSong].play()
  // }
  // }
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
