import { Grid } from "@mui/material";
import React, { useRef } from "react";
import { useLoadMap } from "../../hooks/useLoadMap";

interface MapProps {
    className?: string;
}

const SpecialsMap: React.FC = () => {
    const mapElement = useLoadMap();
    return (
        <Grid ref={mapElement} style={{ height: '100%', width: '100%' }} />
    )
};

export default SpecialsMap;