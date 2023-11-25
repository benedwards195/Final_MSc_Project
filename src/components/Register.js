import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import uuid4 from 'uuid4'; 

export default function Register () {
const [data, setData]=useState({
    name:"",
    username: "",
    address: "",
    pcode: "",
    email: "",
    password: "",
    confirm_password: ""
})
const [successful, setSuccessful]=useState(false);
const [accounts, setAccounts]=useState([]);
const [login, setLogin]=useState([]);

useEffect(()=> {
    fetchAccounts()
    fetchLogins()
}, [])

const fetchLogins = async() => {
    const response = await fetch("http://localhost:5555/login");

    const data = await response.json();
    setLogin(data);
    
}

const fetchAccounts = async() => {
    const response = await fetch("http://localhost:5555/account_information");
    const data = await response.json();
    setAccounts(data);
    
}

const addAccount = async (item) => {
    const response = await fetch("http://localhost:5555/account_information", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const data = await response.json();
    setAccounts([data, ...accounts])
    
}
const addLogin = async (item) => {
    const response = await fetch("http://localhost:5555/login", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const data = await response.json();
    setLogin([data, ...login])
    
}

const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value });

   // console.log(data);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessful(false);
    if (data.name.length > 3 && data.email.length > 3 && data.username.length > 3 && data.pcode.length > 3 && data.address.length > 3 && data.password.length > 3 && data.confirm_password.length > 3 ) {
        
        if (data.email === data.username) {
            setSuccessful(true);
            if (data.password === data.confirm_password) {
                const account = accounts.filter((item) => (item.username === data.username && item.password === data.password));
                var id = uuid4();

                const newLogin = {
                    username: data.username,
                    password: data.password,
                    token: id
                }

                const newAccount = {
                    name: data.name,
                    username: data.username,
                    address: data.address,
                    pcode: data.pcode,
                    email: data.email,
                    token: id
                }
                addAccount(newAccount);
                addLogin(newLogin); 

            }
        }
    } 

    /*if (!successful) {
        alert("Registration has failed");
    }
   */
}

    return (
        
        <div>
           <div className="auth-form-container">
<h2>Register</h2>
<form className="register-form" onSubmit={handleSubmit}>
<label htmlFor="name">Full Name</label>
<input value={data.name} onChange={handleChange} type="text" name="name" id="name" placeholder="Full Name" />
<label htmlFor="username">Username</label>
<input value={data.username} onChange={handleChange} type="text" placeholder="Choose Username" id="username" name="username" />
<label htmlFor="Address">Address Line 1</label>
<input value={data.address} onChange={handleChange} type="text" placeholder="Address Line 1" id="address" name="address" />
<label>Post Code</label>
<input value={data.pcode} onChange={handleChange} type="text" placeholder="Post Code" id="pcode" name="pcode" />
<label htmlFor="email">Email</label>
<input value={data.email} onChange={handleChange} type="text" placeholder="youremail@email.com" id="email" name="email" />
<label>Password</label>
<input value={data.password} onChange={handleChange} type="password" placeholder="***********" id="password" name="password"/>
<label>Confirm Password</label>
<input value={data.confirm_password} onChange={handleChange} type="password" placeholder="***********" id="confirm_password" name="confirm_password"/>
<button type="submit">Log In</button>
</form>
<p className="link-btn">Already have an account? <Link to='/login'>Login here.</Link></p>

        </div>
        </div>

    );
    };

