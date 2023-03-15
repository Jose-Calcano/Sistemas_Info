import React from 'react'  
import Sidebar from '../../Componentes/Chat/Sidebar'
import Chat from '../../Componentes/Chat/Chat'
import './ChatPage.css'

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

export default ChatPage
