import classes from './Content.module.css'

type contentProp = {
  children: JSX.Element | JSX.Element[]
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
