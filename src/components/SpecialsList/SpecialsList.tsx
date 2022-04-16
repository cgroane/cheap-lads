import { Grid } from "@mui/material";
import React from "react";

interface ListProps {
    className?: string;
}

const SpecialsList: React.FC<ListProps> = ({ className }: ListProps) => {
    return (
        <Grid className={className}>
            List
        </Grid>
    )
};

export default SpecialsList;