import React, { useEffect, useState } from "react";
import {CssBaseline, Grid } from '@material-ui/core'

import Header from "./components/Header/Header"
import List from "./components/List/List"
import Map from "./components/Map/Map"
import { placeData } from "./api"

// novo comentario


const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( { coords: {latitude, longitude}} ) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])

    useEffect(() => {
        placeData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline/>
            <Header />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places = { places }/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setBounds={setBounds}
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;