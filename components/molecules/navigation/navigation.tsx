import React,{useContext} from 'react';
import Image from 'next/image'
import styles  from './navigation.module.scss';
import logo from "../../../public/logo.svg";
import home from "../../../public/home.svg";
import more from "../../../public/mas.png";
import move from "../../../public/move.svg";
import search from "../../../public/search.svg";
import star from "../../../public/star.svg";
import tv from "../../../public/tv.svg";
import userImage from "../../../public/user.png";
import Link from "next/link";
import {useRouter} from "next/router";
import { types } from "../../../types/types";
import { AuthContext } from "../../../auth/AuthContext";
interface props {
  username:string
}

export default function Navigation({username}:props) {
  const router = useRouter();
  const { user, dispatch } = useContext(AuthContext);
  const logoutUser = async() => {

    const data = {
      email: user.email,
    };

  const response = await fetch(`http://localhost:4000/api/auth/logout`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "x-access-token":user.token
      },
      body: JSON.stringify(data),
  });

    dispatch({
      types: types.logout,
      payload: {
        name: "",
      },
    });
    router.push('/login')
};
  return (
    <nav className={styles.m_navigation}>

      <ul className={styles.m_navigation__options}>
          <Link href="/">
            <Image  
                src={logo} 
                alt={"logo"} 
                height={60}
                width={80}
                objectFit='contain'
              />
          </Link> 
          <li className={styles.m_navigation__options__item}>
            
            <Image  
              src={home} 
              alt={"home"} 
              height={24}
              width={24}
              objectFit='contain'
           />
           <p>INICIO</p>
          </li>
          <li className={styles.m_navigation__options__item}>
            
            <Image  
              src={search} 
              alt={"search"} 
              height={24}
              width={24}
              objectFit='contain'
           />
           <p>BÚSQUEDA</p>
          </li>
          <li className={styles.m_navigation__options__item}>
            
            <Image  
              src={more} 
              alt={"logo"} 
              height={20}
              width={20}
              objectFit='contain'
           />
           <p>MI LISTA</p>
          </li>

          <li className={styles.m_navigation__options__item2}>
            
            <Image  
              src={star} 
              alt={"logo"} 
              height={26}
              width={26}
              objectFit='contain'
              color='Red'
           />
           <p>ORIGINALES</p>
          </li>

          <li className={styles.m_navigation__options__item2}>
            
            <Image  
              src={move} 
              alt={"logo"} 
              height={24}
              width={24}
              objectFit='contain'
           />
           <p>PELÍCULAS</p>
          </li>

          <li className={styles.m_navigation__options__item2}>
            
            <Image  
              src={tv} 
              alt={"logo"} 
              height={24}
              width={24}
              objectFit='contain'
           />
           <p>SERIES</p>
          </li>
          
      </ul>
      <div  className={styles.m_navigation__user}>
          
         
           <div>
              <p className={styles.m_navigation__user__username} >{username && username!==null?username:"Username"}</p>
              <p className={styles.m_navigation__user__logout} onClick={()=>logoutUser()}> Cerrar sesión</p>
              <p className={styles.m_navigation__user__logout__movil} onClick={()=>logoutUser()}> Salir</p>
           </div>
    
           <Image  
              src={userImage} 
              alt={"logo"} 
              height={48}
              width={48}
              objectFit='contain'
           />
      </div>

     
    </nav>
  )
}
