import { useEffect, useRef } from "react";

interface Props {
    center: any;
    zoom: number;
}
const MyMapComponent = function MyMapComponent({
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

export default MyMapComponent;