import React from 'react'  
import Sidebar from '../../Componentes/Chat/Sidebar'
import Chat from '../../Componentes/Chat/Chat'
import './ChatPage.css'
import { CHAT_URL } from '../../constants/urls'

const ChatPage = ()=> {
  return (
    <div className="chat">
      <div className='container'>
          <Sidebar/>
          <Chat/>
      </div>
    </div>
  )
}

export default CHAT_URL
