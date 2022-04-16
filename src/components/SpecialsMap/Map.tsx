import { Grid } from "@mui/material";
import React from "react";

interface MapProps {
    className?: string;
}

const SpecialsMap: React.FC<MapProps> = ({ className }: MapProps) => {
    return (
        <Grid className={className}>
            map
        </Grid>
    )
};

export default SpecialsMap;