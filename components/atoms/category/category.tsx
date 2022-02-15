import React from 'react'
import styles  from './category.module.scss';
import Image from 'next/image';
import { url } from 'inspector';

interface props {
  logo?: string,
  bg?:string
}
export default function Category({logo,bg}:props) {
  return (
    <div className={styles.a_card_category__container}>
        <Image  
          src={logo} 
          alt={"slider"} 
          height={160}
          width={220}
          objectFit='cover'
           objectPosition= "center"
        />
        <video src={bg} autoPlay muted loop/>
    </div>
  )
}
