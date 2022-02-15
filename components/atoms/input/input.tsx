import React from 'react'
import styles  from './Input.module.scss';


interface props {
    placeholder: string,
    name:string,
    type?:string,
    callback:any
  }
export default function Input({name,placeholder,type="text",callback}:props) {
  return (
    <div className={styles.a_input}> 
        <input
            placeholder={placeholder}
            type={type}
            id={name}
            name={name}
            required
            onChange={(e) => callback(e.target.value, name)}
        />
  </div>
  )
}
