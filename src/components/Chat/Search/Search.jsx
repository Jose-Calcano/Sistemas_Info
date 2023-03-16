import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src='' alt=''></img>
        <div className="userChatInfo">
          <span>Roberto</span>
        </div>
      </div>
    </div>
  )
}

export default Search