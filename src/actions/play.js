import { types } from "../types/types";

import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';



export const getChart = () => {

    return async(dispatch) => {

        const response = await axios.get(`${API_URL}/chart?limit=8`)
            .then(response => response.data.albums.data)
            .catch(error => console.log(error));
        dispatch(setChart(response))


    }


}

export const setChart = (chart) => ({

    type: types.playSetChart,
    payload: chart


});



export const getTracklist = (trackId) => {

    return async(dispatch) => {

        const response = await axios.get(`${API_URL}/album/${trackId}`)
            .then(response => response.data.tracks.data)
            .catch(error => console.log(error));

        dispatch(setTrack(response))


    }


}



export const setTrack = (track) => ({

    type: types.playSetTrack,
    payload: track


});