import React, { useState, useContext } from "react";
import Image from 'next/image'
import styles  from './pageLogin.module.scss';
import logo from "../../../public/logo.svg";
import Input from '../../atoms/input/input';
import Button from "../../atoms/button/button";
export default function PageLogin() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [msgError, setMsgError] = useState(false);

    const handleChange = (e, name) => {
        console.log(name);
        if (name === "username") setName(e);
        else setPass(e);
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
                    <div className={styles.o_page_login__container__form__wrapper__button} onClick={()=>{console.log("first")}}>
                        <Button text="CONTINUAR"/>
                    </div>
                    <div className={styles.o_page_login__container__form__wrapper__options}>
                        <p>¿Primera vez en Disney+?</p>
                        <p className={styles.o_page_login__container__form__wrapper__options__sign_up}>Suscribirse</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
