
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChart } from '../../actions/play';
import { ReproductorPlaylistItem } from "./ReproductorPlaylistItem";

export const ReproductorPlaylist = () => {

    const { chart } = useSelector(state => state.play)
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getChart());


    }, [dispatch])


    return (
        <div className="reprod-playlist">


            {chart.map((chart) => (
                <ReproductorPlaylistItem key={chart.id}  {...chart} />
            ))}

        </div>
    )
}
