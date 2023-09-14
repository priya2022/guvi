import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Features/User";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { button, container, styledLabel, warning, wrapper } from "../style";
import axios from "axios";
import { Api_URL } from "../URL";

const initial = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({dark}) => {
  const [validated, setValidated] = useState(false);
  const [alert, setAlert] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);


  const [user, setUser] = useState(initial);
  const [errorMessage, setErrorMessage] = useState('');


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, // Update the state based on the input's name
    });
    
    
  };



const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;

  
    if (form.checkValidity() === false) {
      setValidated(true); // Show validation errors
      return;
    }

    if (user.password.length < 8) {
      setAlert(true);
      return;
    }

    if (user.confirmPassword !== user.password) {
      setPasswordsMatch(false);
      return;
    }

    // Reset validation status
    setValidated(false);

    const userValues = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    try{
      const response = await fetch(`${Api_URL}register`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(userValues)
      });

      if(response.ok){
        console.log('Registration successful');
        dispatch(signup(userValues));
        navigate('/');
        setErrorMessage("Registration Successful")
      }
      else if(response.status === 409){
        const data = await response.json();
        setErrorMessage(data.Error)
      }
      else{
        const data = await response.json()
        setErrorMessage(data)
      }
     
    }
    catch(error){
      console.error('Error:',error)
    }
  };

  

  return (
    <div style={wrapper(dark)}>
      <div style={container}>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Enter your FullNmae</Form.Label>
            <Form.Control
              required
              type="text"
              value={user.name}
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          <Form.Control.Feedback type="invalid">Please Enter Formatted Email !</Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={user.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter your Password"
              pattern=".{8,}$"
            />
             <Form.Control.Feedback type="invalid">
              Password must be 8 characters long.
            </Form.Control.Feedback>
          </Form.Group>
         


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={styledLabel}>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Enter confirm Password"
              pattern={user.password}
            />
            <Form.Control.Feedback type="invalid">
              Password Do not match.
            </Form.Control.Feedback>
          </Form.Group>

          <p style={warning(dark)}>Already Registered! <Link to="/" >Login </Link></p>
          
         {errorMessage && <p>{errorMessage}</p>}


          <Button variant="primary" type="submit" style={button}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
