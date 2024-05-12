import { useContext } from 'react'
import pen from "../assets/images/pen.svg"
import del from "../assets/images/del.svg"
import clsx from "clsx";
import { TodoContext } from '../context/context';
const NotesItem = ({view, note}) => {
  const {changeNoteHandler:changeNote, deleteNoteHandler:deleteNote} = useContext(TodoContext)
    const notesItemTopClass = clsx('notes__item-top', {active: !view})
  return (
    <div className='notes__item'>
        <div className={notesItemTopClass}>
            <h2>{note.title}</h2>
            <span>{note.date}</span>
        </div>
        <p>{note.text}</p>
        <div className="notes__item-btns">
            <button className="purple" onClick={() => changeNote(note)}><img src={pen} alt="" />РЕДАКТИРОВАТЬ</button>
            <button className="red" onClick={() => deleteNote(note.id)}><img src={del} alt="" />УДАЛИТЬ</button>
        </div>
    </div>
  )
}

export default NotesItem