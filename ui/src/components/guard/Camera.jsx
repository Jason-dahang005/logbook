import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 100,
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
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat={videoConstraints}
        onUserMedia={onUserMedia}
        mirrored={true}
        minScreenshotHeight={100}
        minScreenshotWidth={100}
      />

      <button onClick={capturePhoto}>capture</button>
      <button onClick={() => setUrl(null)}>refresh</button>

      {
        url && (
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        )
      }
    </div>
  )
}

export default Camera
