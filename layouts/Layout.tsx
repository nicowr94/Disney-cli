import React,{useContext,useEffect} from 'react';
import { AuthContext } from "../auth/AuthContext";
import style from './Layout.module.scss'
import {useRouter} from "next/router";
import Login from '../pages/login';
import { types } from "./../types/types";
const Layout = (props) => {
    const { user,dispatch} = useContext(AuthContext);
    const router = useRouter();

    const logoutUser = async() => {
        const response = await fetch(`http://localhost:4000/api/auth/verifyLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-access-token":user?.token
            },
        });
        const response_data = await response.json();
   
        if (!response_data.result) {
            dispatch({
                types: types.logout,
                payload: {
                  name: "",
                },
              });
              router.push('/login')
          } 
      
    };
    useEffect(() => {
        logoutUser()
    }, []);

    return (
        <>
            {
                (user?.logged)?
                    (<main className={style.layout}>{props.children}</main>)
                    : <Login/>
            }
        </>
    );
};

export default Layout;