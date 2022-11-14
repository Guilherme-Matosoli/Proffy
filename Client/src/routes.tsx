
import React from 'react';
import { Landing } from './pages/Landing/Landing';
import { TeacherForm } from './pages/TeacherForm/TeacherForm';
import { TeacherList } from './pages/TeacherList/TeacherList';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const Ways: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/study' element={<TeacherList />}/>
                <Route path='/give-classes' element={<TeacherForm />}/>
            </Routes>
        </Router>
    )
};

