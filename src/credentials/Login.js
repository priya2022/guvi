import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Features/User'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [user,setUser] = useState({
        email:'',
        password:'',
    })

    const userData = useSelector(state=> state.user.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlechange=(e)=>{

        const {name,value}= e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(userData.email === user.email && userData.password === user.password)
        {
        dispatch(login(user))
        navigate('/further')
        }
        else{
            alert("login failed")
        }
    }
  return (
    <div>
        {/* <form >
        <input 
        type="email"
         name="email"
          value={user.email} 
          onChange={handlechange} 
          placeholder='Enter your email'/>
        <input type="password" name="password" value={user.password} onChange={handlechange} placeholder='Enter your password '/> 
        <button type= "submit">Submit</button>
        </form> */}

        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        name="email"
        value={user.email} 
        onChange={handlechange} 
         placeholder="Enter email"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        name="password"
         value={user.password} 
         onChange={handlechange}
        type="password"
         placeholder="Password"
          />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login