import { useEffect, useRef, useState } from "react";
import './music.css'

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, SetCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://images.unsplash.com/photo-1714385998351-341d070aa79e?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
    // Add more tracks as needed
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        console.log(audioRef.current.currentTime);
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  function handlePauseAndPlay() {
    if (isPlaying) {
      audioRef.current.pause();
      console.log("audio reference",audioRef.current.pause());
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  function handleSkipTrack(getDirection) {
    console.log("direction working");
    if (getDirection === "forward") {
      SetCurrentMusicTrack((prevTrack) =>(prevTrack + 1) % tracks.length );
    } else if (getDirection === "backward") {
      SetCurrentMusicTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }

    setTrackProgress(0);
  }

  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <h2> {tracks[currentMusicTrack].title}</h2>
      <img
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />
      <audio ref={audioRef} src={tracks[currentMusicTrack].source} />
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${trackProgress}%`,
            background: isPlaying ? "#3498db" : "#a43636",
            height: '15px'
          }}
        ></div>
      </div>
      <div className="track-controls">
        <button onClick={() => handleSkipTrack("backward")}>Backward</button>
        <button onClick={handlePauseAndPlay}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => handleSkipTrack("forward")}>Forward</button>
      </div>
    </div>
  );
}

export default MusicPlayer;