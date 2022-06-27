import React from 'react'

//style
import "../styles/VideoPart.css"

const VideoPart = () => {
    return <div className='video-container'>
        <div className="video-part">
            <h1 className="video-text">Feel the excellent wet braking with Driveways!</h1>
            <button className="link-button"><a href="https://www.youtube.com/">WATCH ALL VIDEOS</a></button>
            <div>
                <iframe
                    className='video'
                    width="1600"
                    height="480"
                    src={`https://www.youtube.com/embed/fgXgcLIIsjc`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </div>
    </div>

}

export default VideoPart;