import { AsyncThunkOptions, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { getSpecials } from "../api/firestore/firestore";
import { Special } from "../types/specials";
import { ThunkStatus } from "../types/ThunkStatus";

interface StateSlice {
    specials: Special[];
    loadStatus: ThunkStatus;
    filteredSpecials: Special[];
    specialsInView: Special[];
}

const generateInitialState = (): StateSlice => ({
    specials: [],
    loadStatus: ThunkStatus.SUCCESS,
    filteredSpecials: [],
    specialsInView: []
});

export const specials = createSlice({
    name: 'specials',
    initialState: generateInitialState(),
    reducers: {
        resetState: (state) => {
            state = generateInitialState();
        }
    },
    extraReducers: (builder) => 
        builder.addCase(getSpecialsThunk.fulfilled, (state, action) => {
            state.loadStatus = ThunkStatus.SUCCESS;
            state.specials = action.payload
        })
})

export const getSpecialsThunk = createAsyncThunk('firestore/getSpecials', async () => {
    try {
        let specials: Special[] = []
        const response = await getSpecials()
        response.forEach((item: DocumentData) => specials.push(item.data()));
        return specials;
    } catch (err) {
        throw (err)
    }
})

export const { resetState } = specials.actions;