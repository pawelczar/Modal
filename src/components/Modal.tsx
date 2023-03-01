import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { PropsWithChildren, ReactElement, ReactNode, useState } from 'react'
import classes from './Modal.module.css'

type childrenProps = {
  children: JSX.Element | JSX.Element[]
  isOpen: boolean | null
  onClick?: (e: any) => void
}

const Modal = ({ children, isOpen, onClick }: childrenProps) => {
  console.log('Modal is open:', isOpen)

  return (
    <>
      {isOpen && (
        <div className={classes.modalBackground} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  )
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

export default Modal
