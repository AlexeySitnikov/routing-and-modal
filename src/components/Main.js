/* eslint-disable max-len */
import { useState } from 'react'
// import { Button } from './Button'
import { Modal } from './Modal'

export function Main() {
  const [modalActive, setModalActive] = useState(false)
  const clickHandler = (e) => {
    console.log({ e })
    setModalActive(!modalActive)
  }
  return (
    <>
      <div className="container">
        <h1>Main</h1>
        <button type="button" className="my-2 btn btn-primary">Goto children_1</button>
        <hr />
        <button type="button" className="my-2 btn btn-primary">Goto children_2</button>
        <hr />
        <button onClick={clickHandler} type="button" name="OpenModal" className="my-2 btn btn-primary">modal</button>
        {/* <Button title="Show Modal" setModalActive={setModalActive} onClick={clickHandler} /> */}
      </div>
      <div>
        <Modal isOpen={modalActive}>
          <h1>Modal</h1>
          <button onClick={clickHandler} type="button" className="my-2 btn btn-primary">close modal</button>
        </Modal>
      </div>
    </>
  )
}
