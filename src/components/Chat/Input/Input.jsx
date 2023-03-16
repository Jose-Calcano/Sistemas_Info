import React from 'react'
import './input.css'

const input = () => {
  return (
    <div className="Input">
      <input type='text' placeholder='Type something...'/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default input