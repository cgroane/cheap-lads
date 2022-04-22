import { Loader } from "@googlemaps/js-api-loader"
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { placeMarkers } from "../store/mapSlice";
import { useAppDispatch } from "../store/store";

export const useLoadMap = () => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const elementRef = useRef<HTMLDivElement>({} as HTMLDivElement)
    const dispatch = useAppDispatch();
    const {specials} = useSelector((state: RootState) => state.specialsSlice);
    let map: google.maps.Map;
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
        libraries: ['places']
    });

    useEffect(() => {
        if (!userLocation) {
            navigator.geolocation.getCurrentPosition((location) => setUserLocation({
                lng: location.coords.longitude, lat: location.coords.latitude
            }));
        }
        loader
            .load()
            .then((google) => {
                map = new google.maps.Map(elementRef.current as HTMLDivElement, {
                    center: !!userLocation ? userLocation : { lat: 0, lng: 0 },
                    zoom: 4
                })
            }).then(() => {
                dispatch(placeMarkers(specials.map((special) => {
                    return new google.maps.Marker({
                        map: map,
                        position: {
                            lat: special.lat,
                            lng: special.lng
                        }
                    })
                })))
            })
            .catch((err) => console.log(err));
    }, [loader, userLocation, setUserLocation, dispatch, specials]);

    return {elementRef};
}
