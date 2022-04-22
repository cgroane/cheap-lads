import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLoadMap } from "../../hooks/useLoadMap";
import { RootState } from "../../store";
import { placeMarkers } from "../../store/mapSlice";
import { useAppDispatch } from "../../store/store";

interface MapProps {
    className?: string;
}

const SpecialsMap: React.FC = () => {
    const {elementRef } = useLoadMap();
    const { specials } = useSelector((state: RootState) => state.specialsSlice);
    const dispatch = useAppDispatch();

    return (
        <Grid ref={elementRef} style={{ height: '100%', width: '100%' }} />
    )
};

export default SpecialsMap;