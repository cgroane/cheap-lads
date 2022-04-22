import React from 'react';
import { Route, Routes } from 'react-router';
import SpecialsPage from './pages/SpecialsPage/SpecialsPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SpecialsPage />} />
        </Routes>
    )
};

export default App;