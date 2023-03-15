import React from 'react';
import Chat_navbar from './Chat_navbar'
import Search from './Search'




const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="container">
          <Chat_navbar/>
          <Search/>
          </div>
    </div>
  )
}

export default Sidebar