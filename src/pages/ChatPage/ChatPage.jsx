import React from 'react'  
import Sidebar from '../../components/Chat/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat_componente/Chat'
import './ChatPage.css'





export default function ChatPage() {
  return (
    <div className="chat">
      <div className='container'>
          <Sidebar/>
          <Chat/>
      </div>
    </div>
  )
}


