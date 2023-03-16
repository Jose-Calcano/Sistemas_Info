import React from 'react';
import Chat_navbar from '../Chat_navbar/Chat_navbar'
import Search from '../Search/Search'
import Chats from '../Chats_componente/Chats'
import './Sidebar.css'




const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="container">
          <Chat_navbar/>
          <Search/>
          <Chats/>
        </div>
    </div>
  )
}

export default Sidebar