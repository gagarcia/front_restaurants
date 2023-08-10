import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

// import googleKey from '../../../dev.js';

const apiKey = "AIzaSyBXedMiFX16twofsbJev4SvuxjMWmGEmTs"

const Map = ({ setCoordinates, setBounds, coordinates }) => {

    //ola dudinha

    // outro comment

    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={ classes.mapContainer }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.se })
                }}
                onChildClick={''}
            >

            </GoogleMapReact>

        </div>
    )
}

export default Map 