import React from 'react'
import Image from 'next/image'
import styles  from './navigation.module.scss';
import logo from "../../../public/logo.svg";
import home from "../../../public/home.svg";
import more from "../../../public/mas.png";
import move from "../../../public/move.svg";
import search from "../../../public/search.svg";
import star from "../../../public/star.svg";
import tv from "../../../public/tv.svg";
import user from "../../../public/user.png";

export default function Navigation() {

  return (
    <nav className={styles.m_navigation}>

      <ul className={styles.m_navigation__options}>
        <Image  
          src={logo} 
          alt={"logo"} 
          height={60}
          width={80}
          objectFit='contain'
          />
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
          <p>NICOLAS WONG</p>
          <Image  
              src={user} 
              alt={"logo"} 
              height={48}
              width={48}
              objectFit='contain'
           />
      </div>

     
    </nav>
  )
}
