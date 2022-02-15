import React, { useState, useContext } from "react";
import Image from 'next/image'
import styles  from './pageSignUp.module.scss';
import logo from "../../../public/logo.svg";
import Input from '../../atoms/input/input';
import Button from "../../atoms/button/button";
export default function PageSignUp() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [msgError, setMsgError] = useState(false);

    const handleChange = (e, name) => {
        console.log(name);
        if (name === "username") setName(e);
        if (name === "password2") setPass(e);
        else setPass2(e);
    };
    return (
        <div className={styles.o_page_sign_up__container}>
            <div className={styles.o_page_sign_up__container__form}>
                <Image  
                src={"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1C58525B79C87FBCF51DB57011147C96E3A9E604E9D572AC1FE3A520E556BE83/scale?"} 
                alt={"logo"} 
                height={180}
                width={480}
                objectFit='contain'
                />

                <div className={styles.o_page_sign_up__container__form__wrapper}>
                    <h3 className={styles.o_page_sign_up__container__form__wrapper__text}>Escribe tu correo electrónico</h3>
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
                    <Input
                        name='password2'
                        placeholder='Confirmar contraseña'
                        type='password'
                        callback={(e, name) => handleChange(e, name)}
                    />
                    <div className={styles.o_page_sign_up__container__form__wrapper__button} onClick={()=>{console.log("first")}}>
                        <Button text="REGISTRARME"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
