import React from "react";
import {Routes, Route } from "react-router-dom";

import Formulario from "../components/pages/Formulario";
import Home from "../components/pages/Home";
import Lista from "../components/pages/Lista";

const Rotas = props =>{
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/CompanyList" element={<Lista varkey = "Company"/>}></Route>
            <Route exact path="/driverList" element={<Lista varkey = "Driver"/>}></Route>
            <Route exact path="/vehicleList" element={<Lista varkey = "Vehicle"/>}></Route>
            <Route exact path="/companyList/companyForm" element={<Formulario varkey = "Company"/>}></Route>
            <Route exact path="/driverList/driverForm" element={<Formulario varkey = "Driver"/>}></Route>
            <Route exact path="/vehicleList/vehicleForm" element={<Formulario varkey = "Vehicle"/>}></Route>Form     </Routes>
    )
}
export default Rotas