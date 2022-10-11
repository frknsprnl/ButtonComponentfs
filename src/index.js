import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = (props) => {
  return (
  <button {...props} className={`${styles.button} ${props.type ? styles[props.type] : styles.button}` } >{props.text}</button>
  )
}
