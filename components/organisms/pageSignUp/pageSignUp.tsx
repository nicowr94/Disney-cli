import React, { useState, useContext ,useEffect} from "react";
import Image from 'next/image'
import styles  from './pageSignUp.module.scss';
import Input from '../../atoms/input/input';
import Button from "../../atoms/button/button";
import Router from 'next/router';
import { AuthContext } from "../../../auth/AuthContext";
export default function PageSignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [stateForm, setStateForm] = useState(false);
    const [msgError, setMsgError] = useState(false);

    const { user } = useContext(AuthContext);
    if(user?.logged) Router.replace("/")

    const handleChange = (e, name) => {

        switch (name) {
            case 'username':
                setName(e)
              break;
            case 'email':
                setEmail(e)
              break;
            case 'password':
                setPass(e)
              break;
            case 'password2':
                setPass2(e)
              break;
          }
    };

    const signUp= async () => {
        console.log("first")
        const data = {
            name,
            email,
            password: pass,
          };

        const response = await fetch(`http://localhost:4000/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const response_data = await response.json();
        console.table(response_data);
        if (response.ok === true) {
            Router.replace("/login")
        //   history.replace(lastPath);
        } else setMsgError(true);
    };

    useEffect(() => {

        setStateForm(false)
        if( (name.length>4 && email.length>4 && pass.length>4 && pass2.length>4) && (pass === pass2)) setStateForm(true)

      }, [name,email,pass,pass2]);
      

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
                        placeholder='Nombre completo'
                        type='email'
                        callback={(e, name) => handleChange(e, name)}
                    />
                    <Input
                        name='email'
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
                    {
                        stateForm ? <p className={styles.msg_ok}>Correcto</p>:<p className={styles.msg_alert}>Mínimo 5 caracteres por campo</p>
                    }
                    <div className={styles.o_page_sign_up__container__form__wrapper__button} onClick={()=>{signUp()}}>
                        <Button text="REGISTRARME" disabled={!stateForm}/>
                    </div>

                    <p className={pass !== pass2 ? styles.msg_error_visible : styles.msg_error_nv}>
                        Las contraseñas no coinciden
                    </p>
                </div>
            </div>
        </div>
    )
}
