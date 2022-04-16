import { Loader } from "@googlemaps/js-api-loader"
import React, { RefObject, useEffect } from "react";

export const useLoadMap = (element: HTMLDivElement) => {
    const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
        libraries: ['places']
    });

    useEffect(() => {
        loader
            .load()
            .then((google) => {
                new google.maps.Map(element)
            })
            .catch((err) => console.log(err));
    }, [loader])
}
