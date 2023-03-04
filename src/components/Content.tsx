import { ReactNode } from 'react'
import classes from './Content.module.css'

type contentProp = {
  children: ReactNode
}

const Content = ({ children }: contentProp) => {
  return (
    <div
      className={classes.conentContainer}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default Content
