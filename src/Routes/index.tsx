import React from 'react';
import { Route, Routes } from 'react-router';
import SpecialsPage from '../pages/SpecialsPage/SpecialsPage';

const Router = () => {
    return (
        <Routes>
            <Route path="" element={<SpecialsPage />} />
        </Routes>
    )
}