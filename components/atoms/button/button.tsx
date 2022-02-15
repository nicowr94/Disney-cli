import React from 'react';
import styles  from './button.module.scss';

interface props {
    text: string
  }

export default function Button({text}:props) {
  return (
    <button  className={styles.a_button}>{text}</button>
  )
}
