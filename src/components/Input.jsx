import React from 'react'
import photo from "../img/photo.png";
import Attach from "../img/attach.png";
export const Input = () => {
  return (
    <div className='inputUser'>
      <input className="inputbar" type="text" placeholder="Type Something.." />
      <div className="Send">
        <img src={Attach} alt="" />
        <input style={{display:"none",width:"15px"}} type="file" id="file" />
        <label htmlFor="file">
                <img src={photo} alt="" />
        </label>
        <button className='inputButton'>Send</button>
      </div>
    </div>
  )
}
