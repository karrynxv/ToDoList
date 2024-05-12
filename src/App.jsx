import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import pen from './assets/images/pen.svg'
import Modal from "./components/Modal"
import { TodoContext } from "./context/context"

function App() {
  const { t } = useTranslation()
  const getLs = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLs = () => localStorage.notes = JSON.stringify(notes)
  const [notes, setNotes] = useState(getLs)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    setLs()
  }, [notes])
  
  
  const openModalHandler = () => {
    setIsModalOpen(true)
  }
  const closeModalHandler = () => {
    setIsModalOpen(false)
    setIsEdit(false)
    setEditNote(null)
  }
  const addOrChangeNoteHandler = (note) => {
    if(editNote?.id){
      const updatedNotes = notes.map(item => {
        if(item.id === note.id) return note
        return item
      })
      setNotes(updatedNotes)
    }else setNotes([...notes, note])
  }
  
  const deleteNoteHandler = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState(null)
  
  const changeNoteHandler = (note) => {
    setIsModalOpen(true)
    setIsEdit(true)
    setEditNote(note)
  }
  const [searchValue, setSearchValue] = useState('')
  const setSearchingHandler = (val) => {
    setSearchValue(val)
  }
  
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchValue.toLowerCase()))
 
  
  return (
    <TodoContext.Provider 
      value={{
        setSearchingHandler,
        deleteNoteHandler,
        changeNoteHandler,
        closeModalHandler,
        addOrChangeNoteHandler,
        t
      }}
    >
       <Navbar/>
       <Notes notes={filteredNotes}/>
       {isModalOpen && <Modal editNote={editNote} edit={isEdit}/>}
       <button className="add" onClick={() => openModalHandler()}>
          <img src={pen} alt="" />
       </button>
    </TodoContext.Provider>
  )
}
export default App