import React from 'react'

export const Control = () => {
    return (
        <div className="player-bottom">
            <div className="player-controls">
                <button id="prev" className="btn-p">
                    <i className="fas fa-chevron-circle-left fa-3x"></i>
                </button>
                <button id="play" className="btn-p">
                    <i className="fas fa-play fa-3x"></i>
                </button>
                <button id="next" className="btn-p">
                    <i className="fas fa-chevron-circle-right fa-3x "></i>
                </button>

            </div>
            <div className="player-tracks">
                <h1></h1>
            </div>
            <div className="player-options">
                <h1></h1>
            </div>
        </div>
    )
}
