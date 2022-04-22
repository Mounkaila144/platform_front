
import reportWebVitals from './reportWebVitals';
import React, {useEffect, useState} from "react";
import {render} from "react-dom";
import RouteApp from "./routes";
import {CartProvider} from "react-use-cart";
import {AuthProvider} from "react-auth-kit";

const rootElement = document.getElementById("root");

render(
    <AuthProvider authType={'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
        <CartProvider>
            <RouteApp/>
        </CartProvider>
    </AuthProvider>,
    rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
