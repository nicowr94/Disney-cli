import React from 'react';
import styles  from './button.module.scss';

interface props {
    text: string,
    disabled?:boolean
  }

export default function Button({text,disabled=false}:props) {
  return (
    <button  className={styles.a_button} disabled={disabled}>{text}</button>
  )
}
