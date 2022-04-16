import { Grid } from "@mui/material";
import React, { useRef } from "react";
import { useLoadMap } from "../../hooks/useLoadMap";

interface MapProps {
    className?: string;
}

const SpecialsMap: React.FC = () => {
    const mapElement = useRef<HTMLDivElement>(null)
    useLoadMap(mapElement.current as HTMLDivElement);
    return (
        <Grid ref={mapElement} />
    )
};

export default SpecialsMap;