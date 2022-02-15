import React from 'react'
import bg_slider from "./bg_slider.png";
import logo_slider from "./logo_slider.png";
import Image from 'next/image';
import styles  from './slider.module.scss';
export default function Slider() {
  return (
    <div className={styles.m_slider}>
     <div className={styles.m_slider__container}>
      <Image  
        src={bg_slider} 
        alt={"slider"} 
        layout='fill'
        objectFit='cover'
        objectPosition= "center"
        />
      </div>
    </div>
  )
}
