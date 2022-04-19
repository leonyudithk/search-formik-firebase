import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import { FormularioUsuario } from '../components/FormularioUsuario';
import Home from '../components/Home';
import List from '../components/List';
import NavBars from '../components/NavBars';
import Search from '../components/Search';

import TraerAPi from '../components/TraerAPi';


const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/cargarApi" element={<TraerAPi/>} />
                  <Route path="/formik" element={<FormularioUsuario/>} />
                    <Route path="/search" element={<Search/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;