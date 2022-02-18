import React, { useState, useContext } from "react";
import Image from 'next/image'
import styles  from './pageLogin.module.scss';
import Router from 'next/router';
import Input from '../../atoms/input/input';
import Button from "../../atoms/button/button";
import Link from "next/link";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";
import useMobile from "../../../hooks/useMobile";


export default function PageLogin() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [msgError, setMsgError] = useState(false);
    const mobile = useMobile();
    const handleChange = (e, name) => {
     
        if (name === "username") setName(e);
        else setPass(e);
    };

    const { user,dispatch } = useContext(AuthContext);
    // if(user?.logged) Router.replace("/")

    const login_user = async () => {

        const data = {
            email: name,
            password: pass,
            mobile:mobile? "Mobile":"Desktop"
          };

        const response = await fetch(`http://localhost:4000/api/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response_data = await response.json();

        if (response.ok === true) {
            dispatch({
                types: types.login,
                payload: {
                    id: response_data.user.id,
                    name: response_data.user.name,
                    token: response_data.token,
                    role:response_data.user.role,
                    email:response_data.user.email
                },
            });
            Router.replace("/")
        } else setMsgError(true);


    };
    return (
        <div className={styles.o_page_login__container}>
            <div className={styles.o_page_login__container__form}>
                <Image  
                src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C58525B79C87FBCF51DB57011147C96E3A9E604E9D572AC1FE3A520E556BE83/scale?"} 
                alt={"logo"} 
                height={180}
                width={480}
                objectFit='contain'
                />

                <div className={styles.o_page_login__container__form__wrapper}>
                    <h3 className={styles.o_page_login__container__form__wrapper__text}>Inicia sesión con tu correo</h3>
                    <Input
                        name='username'
                        placeholder='Correo electrónico'
                        type='email'
                        callback={(e, name) => handleChange(e, name)}
                    />
                     <Input
                        name='password'
                        placeholder='Contraseña'
                        type='password'
                        callback={(e, name) => handleChange(e, name)}
                    />
                    <div className={styles.o_page_login__container__form__wrapper__button} onClick={login_user}>
                        <Button text="CONTINUAR"/>
                    </div>

                    <p className={msgError ? styles.msg_error_visible : styles.msg_error_nv}>
                        El nombre de usuario y la contraseña que ingresaste no coinciden con
                        nuestros registros. Por favor, revisa e inténtalo de nuevo.
                    </p>
                    <div className={styles.o_page_login__container__form__wrapper__options}>
                        <p>¿Primera vez en Disney+?</p>
                        <Link href="/sign-up">
                            <p className={styles.o_page_login__container__form__wrapper__options__sign_up}>Suscribirse</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
