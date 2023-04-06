import React from 'react';
import "D:/project/first-react-app/src/secondStyle.css";
import { useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

    
    export const Login = () => { 
    const [err,setErr] = useState(false);
    const navigate = useNavigate()
  
     const handleSubmit = async (e) => {
      e.preventDefault();//using this funtion bez we don't want to refresh out register page again and again
      const email = e.target[0].value;
      const password = e.target[1].value;
      
    try{
     await signInWithEmailAndPassword(auth, email, password)
     navigate("/")
    } catch(err){
       setErr(true);
      }
   
    };
  return (
    <div class="FromContainerdSecond">
        <div class="rightFormSecond">
          <span className="heading">Chat </span>
          <span className="title">Login</span>
        <form action="" class="formWrapper" onSubmit={handleSubmit} >
                <input class="input"type="email" placeholder='email'/>
                <input class="input"type="password" placeholder='password'/>
                <button class='bnt'>Sign in</button>
                {err && <span>Something Went Worng</span>}
        </form> 
        <div className="title1">
        <span className="lineSecond">You don't have an account?<Link to="/register">/Register</Link></span>
        </div>
        
        </div>
      </div>  
    
  );
}


