import React from 'react'

export const Message = () => {
  return (
    <div className='message meassage2'>
      <div className="messageInfo">
        <img  className="messageImage" src="https://images.pexels.com/photos/3771127/pexels-photo-3771127.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>just Now</span>
      </div>
      <div className="messageContent messageContent2">
        <p className='meassagePara meassagePara2'>Hey..</p>
         <img style={{height:"85%",width:"50%"}} 
         src="https://images.pexels.com/photos/5709255/pexels-photo-5709255.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> 
      </div>
    </div>
  )
}
