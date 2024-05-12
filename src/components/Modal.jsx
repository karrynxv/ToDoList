// rafce
import { useState,useContext } from 'react'
import { v4 } from 'uuid'
import { TodoContext } from '../context/context';

const Modal = ({ edit, editNote }) => {
  const {closeModalHandler:closeModal, addOrChangeNoteHandler:addOrChangeNote} = useContext(TodoContext)
  const [title, setTitle] = useState(editNote?.title ?? '')
  const [text, setText] = useState(editNote?.text ?? '')
  const addOrChange = () => {
    if (title.length > 0 && text.length > 0) {
      const note = {
        id: editNote?.id ?? v4(),
        title: title,
        text: text,
        date: new Date().toLocaleDateString()
      }
      addOrChangeNote(note)
      closeModal()
    }

  }
  return (
    <div className="modal" onClick={() => closeModal()}>
      <div className="modal__block" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__block-title">{!edit ? 'Добавить' : 'Изменить'} заметку</h2>
        <div className="modal__block-inputs">
          <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder='Content' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="modal__block-btns">
          <button className='red' onClick={() => closeModal()}>Отмена</button>
          {!edit && <button className='purple' onClick={() => addOrChange()}>Добавить</button>}
          {edit && <button className='purple' onClick={() => addOrChange()}>Изменить</button>}

        </div>
      </div>
    </div>
  )
}

export default Modal