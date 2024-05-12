// rafce
import { useContext, useState } from "react";
import listIcon from "../assets/images/list.svg";
import gridIcon from "../assets/images/grid.svg";
import NotesItem from "./NotesItem";
import clsx from 'clsx'
import { TodoContext } from "../context/context.jsx";
const Notes = ({ notes }) => {
  const {t} = useContext(TodoContext)
  const [view, setView] = useState(true)
  const notesListClass = clsx("notes__list", {active: !view})
  return (
    <div className="container notes">
        <div className="notes__top">
            <h2 className="notes__top-title">{t('allNotes')}</h2>
            <button className="notes__top-btn" onClick={() => setView(!view)}>
                <img src={view ? listIcon : gridIcon} alt="" />
                <span>{view ? 'Список' : 'Сетка'}</span>
            </button>
        </div>
        <div className={notesListClass}>
          { notes.map((note) => (
            <NotesItem note={note} key={note.id} view={view}  />
          )) } 
        </div>
    </div>
  )
}
export default Notes