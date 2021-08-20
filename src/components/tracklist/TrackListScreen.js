import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChart, getTracklist } from '../../actions/play';
import { Control } from '../Control/Control';
import { ReproductorSearch } from '../reproductor/ReproductorSearch';
import { SideBar } from '../sidebar/SideBar';
import { TrackListItem } from './TrackListItem';


export const TrackListScreen = () => {
    const dispatch = useDispatch()
    const { trackId } = useParams();
    const { track } = useSelector(state => state.play)

    useEffect(() => {
        dispatch(getTracklist(trackId))
        dispatch(getChart())
    }, [trackId, dispatch])



    return (
        <div className="Track_List_main-content">
            <SideBar />
            <ReproductorSearch />

            <div className="Track_List_playlist">
                <div className="Track_List_header">
                    <div className="Track-picture">


                    </div>
                </div>

                <div className="Track_List">
                    <ul>
                        {
                            track.map(tracks => (
                                <TrackListItem key={tracks.id} {...tracks} />
                            ))
                        }

                    </ul>
                </div>

            </div>
            <Control />
        </div>
    )
}
