import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef, useState } from "react";

export const useLoadMap = () => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const elementRef = useRef<HTMLDivElement>({} as HTMLDivElement)
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
        libraries: ['places']
    });
    // useEffect(() => {
    //     let coords = {
    //         lat: 0,
    //         lng: 0
    //     }

    //     navigator.geolocation.getCurrentPosition((position) => {
    //         coords = {
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude
    //         }
    //     })
    //     if (!userLocation) setUserLocation(coords);
    // }, [userLocation, setUserLocation]);

    useEffect(() => {
        if (!userLocation) {
            navigator.geolocation.getCurrentPosition((location) => setUserLocation({
                lng: location.coords.longitude, lat: location.coords.latitude
            }));
        }
        loader
            .load()
            .then((google) => {
                new google.maps.Map(elementRef.current as HTMLDivElement, {
                    center: !!userLocation ? userLocation : { lat: 0, lng: 0 },
                    zoom: 4
                })
            })
            .catch((err) => console.log(err));
    }, [loader, userLocation, setUserLocation]);
    return elementRef;
}
