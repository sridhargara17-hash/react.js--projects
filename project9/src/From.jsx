import React from "react";
import { useState } from "react";

const From = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfromPassword, setErrorConfromPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confromPasswordColor, setConfromPasswordColor] = useState("");
  const validate =(e)=>{
    e.preventDefault()
    if(userName.length >8){
        setErrorUserName('');
        setUserColor('green')
    }
    else{
        setErrorUserName('Username must be 8 letters long.')
        setUserColor('red')
    }
    if(email.includes('@gmail.com')){
        setErrorEmail('')
        setEmailColor('green')
    }{
        setErrorEmail('Email should have @gmail.com')
        setEmailColor('red')
    }
    if(password.length > 8){
        setErrorPassword('')
        setPasswordColor('green')
    }
    else{
        setErrorPassword('Password should be 8 letter long')
        setPasswordColor('red')
    }
    if(password === conformPassword && password !== ''){
        setErrorConfromPassword('')
        setConfromPasswordColor('green')
    }
    else{
       setErrorConfromPassword('Password must be same')
        setConfromPasswordColor('red')
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-image"> </div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onClick={()=>setUserName('')}
          />
          <p className="error">{errorUserName}</p>
          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={()=>setEmail('')}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPasword(e.target.value)}
            onClick={()=>setPasword('')}
          />
          <p className="error">{errorPassword}</p>
          <input
            type="password"
            placeholder="Conform Password"
            style={{ borderColor: confromPasswordColor }}
            value={conformPassword}
            onChange={(e) => setConformPassword(e.target.value)}
            onClick={()=>setConformPassword('')}
          />
          <p className="error">{errorConfromPassword}</p>
          <button className="submit-btn" onClick={validate}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default From;
