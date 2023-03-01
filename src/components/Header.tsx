import classes from './Header.module.css'

type titleProp = {
  title: string
  closeModal: () => void
}

const Header = ({ title, closeModal }: titleProp) => {
  return (
    <div
      className={classes.headerContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className={classes.headerText}>{title}</h1>
      <button className={classes.headerButton} onClick={closeModal}>
        X
      </button>
    </div>
  )
}

export default Header
