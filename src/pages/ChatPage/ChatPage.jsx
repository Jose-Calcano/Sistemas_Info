import React from 'react'  
import Sidebar from '../../components/Chat/Sidebar'
import Chat from '../../components/Chat/Chat'
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
