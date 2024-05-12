import { useContext, useEffect, useState } from 'react'
import zoom from '../assets/images/zoom.svg'
import back from '../assets/images/back.svg'
import clean from '../assets/images/clean.svg'
import { TodoContext } from "../context/context";
import i18next from 'i18next';

const Navbar = () => {
  const {setSearchingHandler:setSearching, t } = useContext(TodoContext)
  const [show, setShow] = useState(true)
  const [text, setText] = useState('')
  useEffect(() => {
    setSearching(text)
  }, [text])
  
  const [lang, setLang] = useState(false)
  const changeLang = () => {
    setLang(!lang)
    if(!lang) i18next.changeLanguage('uz')
    else i18next.changeLanguage('ru')
  }
  return (
    <header className="header">
      {show ? (<nav className="header__nav">
      <button className="header__nav-lang" onClick={() => changeLang()}>
            {!lang ? 'RU' : 'UZ'}
          </button>
          <h1 className="header__nav-title">{t('notes')}</h1>
        <button className="header__nav-search" onClick={() => setShow(false) }>
          <img src={zoom} alt="" />
        </button>
      </nav>) : (<nav className="header__nav">
        <button className="header__nav-back" onClick={() => setShow(true)}><img src={back} alt="" /></button>
        <input type="text" className="header__nav-input" placeholder='Поиск...' value={text} onChange={(e) => setText(e.target.value)} />
        <button className="header__nav-clean"><img src={clean} alt="" /></button>
      </nav>)}


    </header>
  )
}

export default Navbar