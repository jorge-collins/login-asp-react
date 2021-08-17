import React from "react";
import NavbarComp from "../components/NavbarComp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";

//import EmployeeContextProvider from '../contexts/EmployeeContext';

import ExpocienciasContextProvider from '../contexts/ExpocienciasContext';

// Registers
import Expociencias from "../pages/registers/expociencias";
import Extremofilos from "../pages/registers/extremofilos";

function App() {
    
    require('dotenv').config();

    return (
        <BrowserRouter>
            <NavbarComp />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/extremofilos" component={Extremofilos} />
                
                    {/* <Route exact path="/expociencias" component={Expociencias} /> */}
                <ExpocienciasContextProvider>
                    <Route exact path="/expociencias" component={Expociencias} />
                </ExpocienciasContextProvider>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
