console.log("wellcome to my own Spotify Demo version")
// Initialising variables
let songIndex= 0;
let audioElement= new Audio('musics/0.mp3')
let pnpbtn=document.getElementById('playpause')
let backward=document.getElementById('backward')
let forward=document.getElementById('forward')
let songupdates=document.getElementById('songupdates')
let songstate=Array.from(document.getElementsByClassName('songstate'));
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"On my way" ,filepath:"musics/0.mp3", coverpth:"coverImg/1.jfif"},
    {songName:"Unstoppable" ,filepath:"musics/1.mp3", coverpth:"coverImg/2.jfif"},
    {songName:"Alon pt2" ,filepath:"musics/2.mp3", coverpth:"coverImg/3.jfif"},
    {songName:"Hynm for the weekend" ,filepath:"musics/3.mp3", coverpth:"coverImg/4.jfif"},
    {songName:"faded" ,filepath:"musics/4.mp3", coverpth:"coverImg/5.jfif"},
    {songName:"Pirates of caribian" ,filepath:"musics/5.mp3", coverpth:"coverImg/6.jfif"},
    {songName:"Belever" ,filepath:"musics/6.mp3", coverpth:"coverImg/7.jpg"},
    {songName:"Despacito" ,filepath:"musics/7.mp3", coverpth:"coverImg/8.jpg"}
]
//PlayList control
songItem.forEach((element ,i) => {
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverpth;
    element.getElementsByClassName('songtitle')[0].innerText=songs[i].songName;
});

// audioEvent.play();
pnpbtn.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        pnpbtn.src="img/circle-pause-regular.svg";
    }
    else{
        audioElement.pause();
        pnpbtn.src="img/circle-play-regular.svg";
        
    }
})


//forword key------>


forward.addEventListener('click',()=>{
if(songIndex>=7){
    songIndex=0
}
else{
    songIndex=songIndex+1
}
audioElement.src=`musics/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
})


//backword key------>
backward.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=7
    }
    else{
        songIndex=songIndex-1
    }
    audioElement.src=`musics/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    })

// progress bar Event
audioElement.addEventListener('timeupdate',()=>{
    progress =((audioElement.currentTime/audioElement.duration)*100)
    songupdates.value=progress;
    if(progress==100){
      songs
    }
})
songupdates.addEventListener('change',()=>{
    audioElement.currentTime= (songupdates.value*audioElement.duration)/100;
})
//on clicking any title
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songstate')).forEach(()=>{
        songs

    })
}
songstate.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        audioElement.src=`musics/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
    })
})
