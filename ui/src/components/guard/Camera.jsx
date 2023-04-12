import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 540,
  facingMode:'environment'
}

const Camera = () => {

  const webcamRef = useRef(null)

  const [url, setUrl] = useState(null)

  const capturePhoto = useCallback(async() => {
    const imageSrc = webcamRef.current.getScreenshot()

    setUrl(imageSrc)
  }, [webcamRef])

  const onUserMedia = (e) => {
    console.log(e)
  }

  return (
    <div>
      <div className="">
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat={videoConstraints}
          onUserMedia={onUserMedia}
          mirrored={true}
          className='border-8 border-red-500'
        />
      </div>

      <button onClick={capturePhoto}>capture</button>
      <button onClick={() => setUrl(null)}>refresh</button>

      {url && (
        <div>
          <img src={url} alt="Screenshot" />
          </div>
      )}
    </div>
  )
}

export default Camera
