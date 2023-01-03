import React, { useState, useEffect } from "react";
import Register from "./Register";
import PropTypes from 'prop-types';
import {Link, useNavigate} from 'react-router-dom';

/*
async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
*/
export const Login = ( {setToken}) => {
const [username, setUsername] = useState('');
const [pass, setPass] = useState('');
//const [token, setToken] = useState();
const [accounts, setAccounts] = useState([]);
let navigate = useNavigate();


useEffect (()=>{
  fetchAccounts();
}, []
)
const fetchAccounts = async() => {
const response = await fetch('http://localhost:5555/login');
const data = await response.json();
setAccounts(data);
} 


const handleSubmit = async e => {
e.preventDefault();
const account = accounts.filter((item) => (item.username === username && item.password === pass));

if (account.length !== 0) {
setToken(account[0].token);
navigate('/home');
}
else {
  alert("Login unsuccessful");
}
//console.log(token);
};

//const [currentForm, setCurrentForm] = useState('login');

 // const toggleForm = (formName) => {
  //  setCurrentForm(formName);
 // }


    return(
<div>
    <div className="auth-form-container">
<h2>Login</h2>
  <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" id="username" name="username" />
      <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" id="password" name="password"/>
      <button type="submit">Log In</button>
  </form>
      
      <p className="link-btn">Don't have an account? <Link to='/register'>Register here.</Link></p>
      
</div>

        </div>
        
    )

};


export default Login;