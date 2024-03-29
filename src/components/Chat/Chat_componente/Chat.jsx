import React from 'react'
import './Chat.css'
import Cam from '../../../assets/cam.png'
import Add from '../../../assets/add.png'
import More from '../../../assets/more.png'
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

const Chat = () => {
  return (
    <div className="Chat">
      <div className="chatInfo">
          <span>Jane</span>
          <div className="chatIcons">
            <img src={Cam} alt=''/>
            <img src={Add} alt=''/>
            <img src={More} alt=''/>
          </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat