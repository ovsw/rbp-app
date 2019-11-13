import React from 'react' // eslint-disable-line
import VideoCover from 'react-video-cover'

const HeroVideoBg = () => {
  const videoOptions = {
    src: 'https://rbpvideo-ac97.kxcdn.com/rambling-pines-camp-intro-video.mp4',
    autoPlay: true,
    loop: true,
    muted: true
  }
  return (

    <VideoCover
      videoOptions={videoOptions}
    />

  )
}

export default HeroVideoBg
