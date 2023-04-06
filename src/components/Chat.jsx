import React from 'react'
import { Messages } from './Messages'
import {Input} from "./Input"
export const Chat = () => {
  return (
    <div class="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatImage">
          <img className="img1" src="https://cdn-icons-png.flaticon.com/128/1159/1159798.png" alt="" />
          <img className="img1" src="https://cdn-icons-png.flaticon.com/128/6469/6469169.png" alt="" />
          <img className="img1" src="https://cdn-icons-png.flaticon.com/128/70/70339.png" alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
export default Chat;