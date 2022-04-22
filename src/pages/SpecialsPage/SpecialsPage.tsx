import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpecialsMap from "../../components/SpecialsMap/Map";
import { getSpecialsThunk } from "../../store/specialsSlice";
import { useAppDispatch } from "../../store/store";

const SpecialsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSpecialsThunk());
    }, [])
    return (
        <SpecialsMap/>
    )
};


export default SpecialsPage;