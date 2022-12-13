import { Routes, Route } from 'react-router-dom';


import { Recruiter } from '../Components/Recruiter';
import { Home } from '../Components/Home';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recruiter' element={<Recruiter />} />
        </Routes>
    );
};