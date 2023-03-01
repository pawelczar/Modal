import classes from './Footer.module.css'

type footerProps = {
  callActionLabel: string
  closeModal: () => void
}

const Footer = ({ callActionLabel, closeModal }: footerProps) => {
  const callAction = () => {
    window.alert(callActionLabel)
    closeModal()
  }
  return (
    <div
      className={classes.footerContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <button className={classes.cancelButton} onClick={closeModal}>
        Cancel
      </button>
      <button className={classes.callActionlButton} onClick={callAction}>
        {callActionLabel}
      </button>
    </div>
  )
}

export default Footer
