import { Grid } from "@mui/material";
import React, { useRef } from "react";
import SpecialsMap from "../../components/SpecialsMap/Map";
import { useLoadMap } from "../../hooks/useLoadMap";

const SpecialsPage: React.FC = () => {
    return (
        <SpecialsMap/>
    )
};


export default SpecialsPage;