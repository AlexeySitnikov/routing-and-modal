/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Button } from './Button'
import styles from './modal.module.css'

export function Modal({ isOpen, children }) {
  return (
    <div className={isOpen ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
      <div className={isOpen ? `${styles.modal__content} ${styles.active}` : `${styles.modal__content}`}>
        {children}
      </div>
    </div>
  )
}
