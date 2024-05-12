import React, { useEffect, useRef, useState } from 'react'

function OwnMusicPlayer() {

    const [currentSong,setCurrentSong]=useState(6);
    const [isPlaying,setIsPlaying]=useState(false);
    const[songLength,setSongLength]=useState(0);

    const audioRef=useRef();
  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://images.unsplash.com/photo-1634715281818-ce65b4dbc99f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kYWxzfGVufDB8fDB8fHww",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Track 3",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image: "https://images.unsplash.com/photo-1610085927744-7217728267a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMGhkJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    },
    {
      title: "Track 4",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      title: "Track 5",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
      image: "https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      title: "Track 6",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
      image: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vZGVsfGVufDB8fDB8fHww",
    },
    {
      title: "Track 7",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
      image: "https://images.unsplash.com/photo-1615212814093-f56085658024?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vZGVsfGVufDB8fDB8fHww",
    }

    // Add more tracks as needed
  ];

   
  function playPreviousSong(){
    
    
     let preSong=currentSong%tracks.length-1;
     if(preSong<0){
      setCurrentSong(tracks.length-1)
     }
     else{
      setCurrentSong(preSong);
     }
    
  }

  function playAndPauseSong(){
    console.log("playing and pause working");
    if(isPlaying)
    {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    else{
      audioRef.current.play();
      setIsPlaying(true);
    }
   console.log(audioRef.current.currentTime)
   console.log(audioRef.current.duration)
   console.log("songLength",songLength);
  }

  function playNextSong(){
    console.log(isPlaying);
    setIsPlaying(false);
    let nextSong=currentSong%tracks.length+1;
    if(nextSong>tracks.length-1){
     setCurrentSong(0)
    }
    else{
     setCurrentSong(nextSong);
    }
  }

    useEffect(()=>{
      
      let id=setInterval(()=>{
        let calculate=(audioRef.current.currentTime/audioRef.current.duration)*100;
        setSongLength(calculate);
      },1000)

      return()=>clearInterval(id);
    },[audioRef,isPlaying])

  return (
    <div>
       <h1>Our own music player</h1>
        <h2>{tracks[currentSong].title}</h2>
        <div className="music-container" style={{display:"flex",alignItems:"center",justifyContent:'space-between', flexDirection:'column'}}>
            <img src={tracks[currentSong].image} alt={tracks[currentSong].title} style={{height:"200px",width:"160px",objectFit:"cover", borderRadius:"20px",paddingBottom:'10px'}} />
            <div className="music-bar" style={{height:"10px", width:"80%",background:"yellow", borderRadius:"10px",marginBottom:'10px'}}>
            <audio ref={audioRef} src={tracks[currentSong].source}></audio>
              <div className="progress" style={{height:'100%',width:`${songLength}%`,background:"skyblue", borderRadius:"10px",paddingBottom:'10px'}}></div>
            </div>
        </div>
        <div className="player-buttons" style={{display:'flex',alignItems:'center',gap:'20px',paddingLeft:'40%'}}>
            <button onClick={playPreviousSong}>Backword</button>
            <button onClick={playAndPauseSong}>{(isPlaying)?'pause':'Play'}</button>
            <button onClick={playNextSong}>Forward</button>
        </div>
    </div>
  )
}

export default OwnMusicPlayer
