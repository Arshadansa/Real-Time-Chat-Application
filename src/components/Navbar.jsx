import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div class="Navbar">
      
      <span className="logo">Chat Application</span>

     
      <div className="user">
      <img  class="image" src={currentUser.photoURL} alt="" />
      <span className="name">{currentUser.displayName}</span>
      <button class="btn" onClick={()=>signOut(auth)}>logout</button>
      </div>

      
    </div>
  )
}
