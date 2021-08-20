import { types } from "../types/types";

const initialState = {
    chart: [],
    track: [],
    loading: true
}




export const playReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.playSetChart:

            return {
                ...state,
                //, ...state.chart
                chart: [...action.payload],
                loading: false
            }


        case types.playSetTrack:

            return {
                ...state,
                //, ...state.chart
                track: [...action.payload],
                loading: false


            }



        default:
            return state;
    }








}