import React from 'react'
import {Chat } from '../components/Chat';
import { Sidebar } from '../components/Sidebar';
import "D:/project/first-react-app/src/css/homestyle.css";

export const Home = () => {
  return (
    <div class="Home">
        <div className="container">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

