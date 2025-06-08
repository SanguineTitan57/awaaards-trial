import React, { useRef, useState } from 'react'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClickedt] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setloadedVideos] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef(null)

  const handleMiniVideoClick = () => {
    setHasClickedt(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)

  }

  const getVideoSrc = (index: number) => `video/hero-${index}.mp4`

  const handleVideoLoad = () => {
    setloadedVideos((prev) => prev + 1)
  }

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg group'>
          <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in group-hover:scale-100 group-hover:opacity-100'>

            <video ref={nextVideoRef} src={getVideoSrc(currentIndex + 1)} loop muted id='current-video' className='size-64 scale-150 object-cover object-center origin center' onLoadedData={handleVideoLoad} />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero