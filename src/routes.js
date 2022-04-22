import React, {useState} from 'react';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import App from "./Page/App";
import Original from "./Page/Materiel/Original";
import Panier from "./Page/Panier";
import Login from "./Page/Login";
import { RequireAuth } from 'react-auth-kit'
import Menu from "./Page/Menu";



const RouteApp = () => {
    const [token, setToken] = useState([]);

    return (
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<App/>}>
                        <Route path={"original"} element={<Original/>}/>
                        <Route path="login" element={<Login token={token} setToken={setToken}/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path={"panier"}
                               element={
                                   <RequireAuth loginPath={'/react/login'}>
                                       <Panier token={token} setToken={setToken}/>
                                   </RequireAuth>
                               }/>

                    </Route>
                </Routes>
            </BrowserRouter>
    );
};

export default RouteApp;
