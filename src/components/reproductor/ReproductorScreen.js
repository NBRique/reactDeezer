import React from 'react'
import { Control } from '../Control/Control'
import { SideBar } from '../sidebar/SideBar'
import { ReproductorPlaylist } from './ReproductorPlaylist'
import { ReproductorSearch } from './ReproductorSearch'

export const ReproductorScreen = () => {
    return (
        <div className="reproductor_main-content">

            <SideBar />
            <ReproductorSearch />
            <ReproductorPlaylist />
            <Control />

        </div>
    )
}
