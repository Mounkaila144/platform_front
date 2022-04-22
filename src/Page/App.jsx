import * as React from 'react';
import {useEffect, useState} from "react";
import {Outlet, Link, UNSAFE_RouteContext} from "react-router-dom";
import HeaderPhone from "../components/header/App";
import Home from "../components/Home";
import {green, pink} from "@mui/material/colors";


export default function App() {
    const [cart, updateCart] = useState([])
    const styles = (theme) => ({
        root: {
            padding: theme.spacing(1),
            [theme.breakpoints.down('md')]: {
                backgroundColor: theme.palette.secondary.main,
            },
            [theme.breakpoints.up('md')]: {
                backgroundColor: theme.palette.primary.main,
            },
            [theme.breakpoints.up('lg')]: {
                backgroundColor: green[500],
            },
        },
    });
    return (
        <Home
        top={<HeaderPhone/>}
        left={

            <Outlet/>
        }
        />
    );
}
