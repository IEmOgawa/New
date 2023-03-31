import React, {useState} from "react"
import "./App.css"
import Axios from "axios"


function App(){
const [email, setEmail] = useState("");  
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [retypepassword, setRetypepassword] = useState("");
const [loginStatus, setLoginStatus] = useState("");
const [registerStatus, setRegisterStatus] = useState("");

const register = (e) => {
  e.preventDefault();
  Axios.post("http://localhost:7070/auth/register", {
    email: email,
    username: username,
    password: password,
    retypepassword: retypepassword,
  }).then((response) => {
    if(response.data.message){
      setRegisterStatus(response.data.message)
    }else{
      setRegisterStatus("Account created successfully");
    }
  })
}

const login = (e) => {
  e.preventDefault();
  Axios.post("http://localhost:7070/auth/login", {
    username: username,
    password: password,    
  }).then((response) => {
    if(response.data.message){
      setLoginStatus(response.data.message)
    }else{
      setLoginStatus(response.data[0].col_emailAddress);
    }
  })
}


  return (
    <div className="container">
      <div className="loginForm">
        <form>
          <h4>Login Here</h4>
         <label htmlFor="username">Username*</label>
         <input className="=textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} required/>
         <label htmlFor="password">Password*</label>
         <input className="=textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required/>
         <input className="button" type="submit" onClick={login} value="login"/>
         <h1 style={{color: 'red'}}>{loginStatus}</h1>
        </form>
      </div>
      <div className="loginForm">
      <form>
          <h4>Register Here</h4>
          <label htmlFor="mail">email**</label>
         <input className="=textInput" type="email" name="email" onChange={(e) => {setEmail(e.target.value)}} required/>
         <label htmlFor="username">Username*</label>
         <input className="=textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} required/>
         <label htmlFor="password">Password*</label>
         <input className="=textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} required/>
         <label htmlFor="retypepassword">ReType-Password*</label>
         <input className="=textInput" type="password" name="retypepassword" onChange={(e) => {setRetypepassword(e.target.value)}} required/>
         <input className="button" type="submit" onClick={register} value="Register"/>
         <h1 style={{color: 'red'}}>{registerStatus}</h1>
        </form>
      </div>
    </div>
  )
}



export default App;
