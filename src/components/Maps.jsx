import {useMemo} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

function Maps(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "", //AIzaSyChdiAgGujV4D8PzqMz46DAnojW0ZAdwmk
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <Map/>
}

function Map(){
    //18.336733, -99.546569
    const center = useMemo(() => ({ lat: 18.336733, lng: -99.546569 }), []);

    return (
    <GoogleMap id="ubicanos" zoom={18} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
    </GoogleMap>
    );
}

export default Maps