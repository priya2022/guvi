import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Features/User'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import {wrapper,container, styledLabel, button, formControl} from '../style'


const Login = () => {

    const [validated, setValidated] = useState(false);
    const [show,setShow] = useState(false)
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
        const form =  e.currentTarget;
        if (form.checkValidity() === false) {
           e.preventDefault();
           e.stopPropagation();
          
        }
    
        setValidated(true);
        e.preventDefault();

        if(userData.email === user.email && userData.password === user.password)
        {
        dispatch(login(user))
        navigate('/further')
        }
        else{
            setShow(true)
        }
    }

  return (
    <div style={wrapper}>
        
        <div style={container}>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label style={styledLabel}>Email address</Form.Label>
        <Form.Control 
        style={formControl}
        required
        type="email"
        name="email"
        value={user.email} 
        onChange={handlechange} 
         placeholder="Enter email"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={styledLabel}>Password</Form.Label>
        <Form.Control  
            required
        name="password"
         value={user.password} 
         onChange={handlechange}
        type="password"
         placeholder="Password"
          />
      </Form.Group>
     
      <Button variant="primary" type="submit" style={button}>
        Submit
      </Button>
    </Form>

    {
        show ? ( <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Alert</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Please Enter same Email and password</Toast.Body>
          </Toast>):('')
    }

        </div>
        

        
    </div>
  )
}

export default Login