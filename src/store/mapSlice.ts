import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Marker } from "../types/map";

interface MapSlice {
    markers: google.maps.Marker[];
    show: boolean;
}

const generateInitialState = (): MapSlice => ({
    markers: [],
    show: true
});

export const mapSlice = createSlice({
    name: 'mapSlice',
    initialState: generateInitialState(),
    reducers: {
        placeMarkers: (state, action: PayloadAction<google.maps.Marker[]>) => {
            state.markers = action.payload;
        }
    }
});

export const { placeMarkers } = mapSlice.actions;