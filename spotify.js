console.log("welcome to my spotoify");
let songindex=0;
let audioElement=new Audio('1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar=document.getElementById("button");
let songs=[
    { songName:" salam isq",filepath: "songs.mp3",coverpath:" cover/1.jpg"}
]

// audioElement.play(); 
//handle play/pause click
myprogressbar.addEventListener('click',()=>
{
 audioElement.play('1.mp3');
})
//listen to Events
myprogressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})