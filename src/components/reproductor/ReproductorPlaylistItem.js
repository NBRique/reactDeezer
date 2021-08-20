import React from 'react'
import { Link } from 'react-router-dom'

export const ReproductorPlaylistItem = (chart) => {

    // console.log(id, title, cover_medium, release_date)

    const { id, title, cover_medium, release_date, artist: { name } } = chart

    // console.log(id, title, cover_medium, release_date)

    return (
        <div className="repro-play-item">

            <div className="repro-play-picture">
                <img src={cover_medium} alt="img" />

                <Link className="action-item-btn" to={`/track/${id}`}>
                    <i className="fas fa-play fa-3x"></i>
                </Link>
            </div>

            <div className="repro-play-body">

                <p className="repro-play-album">
                    {title}
                </p>
                <p className="repro-play-singer" >
                    {name}
                </p>


                <p className="repro-play-date">
                    {release_date}
                </p>
            </div>


            {/*  <TrackListScreen /> */}

        </div>
    )
}
