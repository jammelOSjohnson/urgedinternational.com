
import React, { ReactElement, useEffect, useRef } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Spinner } from '../../Components/spinner';
import ErrorComponent from './Comp/ErrorComponent';
//import { MyMapComponent } from './Comp/MyMapComponent';

const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) return <ErrorComponent />;
    return <Spinner />;
};

function MyMapComponent({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef();
  
    useEffect(() => {
    //   new window.google.maps.Map(ref.current, {
    //     center,
    //     zoom,
    //   });
    });
  
    // return <div ref={ref} id="map" />;
    return <></>
}


export const testmap: React.FC = function testmap() {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;
    return <Wrapper apiKey={process.env.REACT_APP_GEO_API2 !== undefined? process.env.REACT_APP_GEO_API2: ""} render={render}>
        <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>;
}

export default testmap;
