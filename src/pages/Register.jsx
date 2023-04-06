import React from 'react';
import Add from "../img/photo.png"
import add from "../img/image7.webp"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL,
 } from "firebase/storage";
import "D:/project/first-react-app/src/style.css";
import { useState } from 'react';
import { async } from '@firebase/util';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

 
export const Register = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault();//using this funtion bez we don't want to refresh out register page again and again
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
  try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
        
const storageRef = ref(storage, displayName);
 
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on( 
  (error) => {
    setErr(true);
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });
      await setDoc(doc(db, "users", res.user.uid),{});
      navigate("/");

    });
  }
);
} catch(err){
     setErr(true);
    }

  };
  return (
    <div class="FromContainer">
         <div className="leftForm">
         <img class="registerImg" src={add} alt="" />  
        </div> 
        <div class="RightForm">
          <span className="heading">Chat </span>
          <span className="title">Register</span>
        <form onSubmit={handleSubmit} class="formWrapper">
                <input class="input" type="text" placeholder='display Name' />
                <input class="input" type="email" placeholder='email'/>
                <input class="input" type="password" placeholder='password'/>
                <input style={{display:"none"}} class="input" type="file" id="file" />
                <label htmlFor="file">
                  <img style={{width:"15%"}}src={Add} alt="" />
                  <span style={{color:"#5d5b8d"}}>Add an avatar</span>
                </label>
                <button class='bnt'>Sign up</button>
                {err && <span>Something Went Worng</span>}
        </form> 
        <span className="line">You do have an account?<Link to="/login">/Login</Link></span>
        </div>
      </div>  
    
  );
}


