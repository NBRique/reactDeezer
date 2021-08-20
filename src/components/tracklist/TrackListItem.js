import React, { useState } from 'react'
import { useSelector } from 'react-redux';


export const TrackListItem = (tracks) => {

    const loading = useSelector(state => state.play)
    console.log(loading)

    const { id, title, duration, preview, artist: { name } } = tracks
    const [currentSong, setCurrentSong] = useState(null);

    const inputRef = React.useRef();
    console.log(inputRef)

    const handlePlay = songPreview => {
        if (currentSong) {
            if (currentSong === songPreview) {
                return inputRef.current.play();
            }
        }
        setCurrentSong(songPreview);
    };



    return (



        <div className="track_list_item">

            <div key={id}>

                <audio ref={inputRef} src={currentSong} />
                <button className="track_list_item-btn" onClick={() => handlePlay(preview)}
                >
                    <i className="fas fa-play-circle fa-2x"></i>
                </button>

                <button className="track_list_item-btn" onClick={() => inputRef.current.pause()}
                >
                    <i className="fas fa-pause-circle fa-2x"></i>
                </button>



            </div>
            <div className="track_list_item-title">
                <h1>{title} </h1>
            </div>

            <div className="track_list_item-duration">
                <h1>{duration} </h1>
            </div>
        </div>


    )
}
