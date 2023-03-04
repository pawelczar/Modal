import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [isVisible, setIsVisible] = useState<boolean | null>(false)

  const toggle = () => {
    setIsVisible(!isVisible)
  }

  console.log('toggle status:', isVisible)

  return (
    <div className="App">
      {!isVisible && (
        <button className="showModal" onClick={toggle}>
          Show Modal
        </button>
      )}
      <Modal isOpen={isVisible} onClick={toggle}>
        <Modal.Header title={'Warning !!'} closeModal={toggle} />
        <Modal.Content>
          <p>Tu jest tresc komunikatu jaka ukazala by sie w modalu</p>
        </Modal.Content>
        <Modal.Footer callActionLabel={'Udalo sie'} closeModal={toggle} />
      </Modal>
    </div>
  )
}

export default App
