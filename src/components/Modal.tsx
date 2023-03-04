import { createPortal } from 'react-dom'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ReactElement, ReactNode, useState } from 'react'
import classes from './Modal.module.css'

type childrenProps = {
  children: ReactNode
  isOpen: boolean | null
  onClick?: (e: any) => void
}

const Modal = ({ children, isOpen, onClick }: childrenProps) => {
  console.log('Modal is open:', isOpen)

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={classes.modalBackground} onClick={onClick}>
            {children}
          </div>,
          document.getElementById('modal') as HTMLElement,
        )}
    </>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

export default Modal
