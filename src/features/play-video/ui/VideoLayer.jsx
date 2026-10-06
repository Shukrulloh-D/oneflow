import { useState } from 'react'
import { Icon } from '@/shared/ui'
import './VideoLayer.css'

// Full cover video over a section. Click the cross to close it.
export function VideoLayer({ src, poster, onClose }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="video-layer">
      {failed ? (
        <p className="video-layer__error">
          Video file not found. Add your mp4 to <code>public/video/</code> and set the name in{' '}
          <code>shared/config/site.js</code>.
        </p>
      ) : (
        <video
          className="video-layer__video"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          onError={() => setFailed(true)}
        />
      )}
      <button className="video-layer__close" type="button" aria-label="Close video" onClick={onClose}>
        <Icon name="close" size={24} />
      </button>
    </div>
  )
}
