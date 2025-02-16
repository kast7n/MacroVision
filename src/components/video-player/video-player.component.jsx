import React, { useState, useRef, useEffect } from 'react';
import './video-player.styles.scss';

const VideoPlayer = ({ videoUrl, posterImage }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const [currentSpeed, setCurrentSpeed] = useState(1);

  // Initial setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      // Don't autoplay - let user control playback
      videoRef.current.pause();
    }
  }, []);

  // Handle mute state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle play state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Play prevented:", error);
            setIsPlaying(false);
          });
        }
      } else {
        videoRef.current.pause();
      }
    }

    const hideControlsTimer = setTimeout(() => {
      if (!isPlaying) setShowControls(false);
    }, 3000);

    return () => clearTimeout(hideControlsTimer);
  }, [isPlaying]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setProgress(pos * 100);
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const handleSpeedChange = (speed) => {
    setCurrentSpeed(speed);
    videoRef.current.playbackRate = speed;
    setShowSpeedMenu(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="video-player"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        className="video-player__video"
        poster={posterImage}
        playsInline
        loop
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        autoPlay={false}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={`video-player__controls ${showControls ? 'video-player__controls--visible' : ''}`}>
        {/* Progress bar */}
        <div 
          className="video-player__progress-container"
          ref={progressRef}
          onClick={handleProgressClick}
        >
          <div 
            className="video-player__progress-bar"
            style={{ width: `${progress}%` }}
          />
          <div className="video-player__time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="video-player__bottom-controls">
          {/* Play/Pause button */}
          <button 
            className="video-player__control-button"
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          {/* Volume control */}
          <div className="video-player__volume-control">
            <button 
              className="video-player__control-button"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted || volume === 0 ? <VolumeMuteIcon /> : <VolumeIcon />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="video-player__volume-slider"
            />
          </div>

          {/* Playback speed */}
          <div className="video-player__speed-control">
            <button 
              className="video-player__control-button"
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
            >
              {currentSpeed}x
            </button>
            {showSpeedMenu && (
              <div className="video-player__speed-menu">
                {playbackSpeeds.map((speed) => (
                  <button
                    key={speed}
                    className={`video-player__speed-option ${speed === currentSpeed ? 'active' : ''}`}
                    onClick={() => handleSpeedChange(speed)}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// SVG Icons components
const PlayIcon = () => (
  <svg className="video-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PauseIcon = () => (
  <svg className="video-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const VolumeIcon = () => (
  <svg className="video-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19 5c1.5 1.5 2.5 3.5 2.5 5.5s-1 4-2.5 5.5" />
    <path d="M15 9c0.5 0.5 1 1.5 1 2.5s-0.5 2-1 2.5" />
  </svg>
);

const VolumeMuteIcon = () => (
  <svg className="video-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

export default VideoPlayer;