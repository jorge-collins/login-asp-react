import React from "react";
import NavbarComp from "../components/NavbarComp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";

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
                <Route exact path="/expociencias" component={Expociencias} />
                <Route exact path="/extremofilos" component={Extremofilos} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
