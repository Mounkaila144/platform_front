import * as React from 'react';
import List from '@mui/material/List';
import {useNavigate} from "react-router-dom";
import Btnderoulan from "../Btnderoulan";
import NestedList from "../BtnSidebar";
import NestedBtn from "../NestedBtn";
import HeaderDesing from "./HederDesing";
import Button from '@mui/material/Button';
import {orange, blue} from "@mui/material/colors";
import {useIsAuthenticated, useSignOut} from 'react-auth-kit'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Allcine from './logo7.png'
import Box from "@mui/material/Box";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";


const drawerWidth = 240;


export default function HeaderPhone() {
    const signOut = useSignOut()
    const auth = useIsAuthenticated()

    let navigate = useNavigate();

    function handleClick() {
        navigate(`/react/Menu`)
    }

    function register() {
        navigate(`/register`)
        window.location.reload()
    }

    return (<HeaderDesing
        logo={'Platform'}
        btnflexsm={<>
            <Button
                variant="contained"
                sx={{
                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                }}
                onClick={handleClick}

            >
                Menu
            </Button>
            <Button
                variant="contained"
                sx={{
                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                }}
                onClick={()=>navigate("/react/materiel/original")}

            >
                Article
            </Button>

        </>}
        search={
            <>
                <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                    {auth() ?
                        <>
                            <Box sx={{display: {xs: 'flex', md: 'none'},width:150,height:45,marginTop:2}}>
                                {"Platform"}
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 3
                                }}
                                onClick={() => navigate(`/react/panier`)}

                            >
                                <ShoppingCartIcon/>
                            </Button>
                        </> : <>
                            <Box sx={{display: {xs: 'flex', md: 'none'},width:130,height:35,marginTop:2}}>
                                { "Platform"}
                            </Box>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2,width:110
                                }}
                                onClick={() => navigate(`/react/login `)}

                            >
                                Connexion
                            </Button>

                        </>
                    }
                </Box>
                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    {auth() ?
                        <>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                                }}
                                onClick={() => signOut()}

                            >
                                Deconnecter
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                                }}
                                onClick={() => navigate(`/react/panier`)}

                            >
                                <ShoppingCartIcon/>
                            </Button>
                        </> : <>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                                }}
                                onClick={register}

                            >
                                Inscription
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    my: 2, color: 'white', display: 'block', backgroundColor: blue[900], marginLeft: 2
                                }}
                                onClick={() => navigate(`/react/login`)}

                            >
                                Connexion
                            </Button>

                        </>
                    }
                </Box>
            </>
        }

    />);
}
