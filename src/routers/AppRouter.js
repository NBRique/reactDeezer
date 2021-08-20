import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { ReproductorScreen } from '../components/reproductor/ReproductorScreen';
import { TrackListScreen } from '../components/tracklist/TrackListScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ReproductorScreen} />
                    <Route path="/track/:trackId" component={TrackListScreen} />
                    <Route path="/loading" component={LoadingScreen} />
                </Switch>
            </div>
        </Router>
    )
}
