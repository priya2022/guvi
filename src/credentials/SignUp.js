import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Features/User";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const initial = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initial);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, // Update the state based on the input's name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("okay", user);
    // const value ={
    //     name:user.name,
    //     email:user.email,
    //     password:user.password,
    //     confirmPassword:user.confirmPassword
    // }
    dispatch(
      signup({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      })
    );
    navigate("/login");
  };
  return (
    <div>
      {/* <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <input
          type="password"
          value={user.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Enter confirm Password"
        />
        <button type="submit">Submit</button>
      </form> */}

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your FullNmae</Form.Label>
        <Form.Control 
        type="text"
        value={user.name}
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email"
        value={user.email}
        name="email"
        onChange={handleChange}
        placeholder="Enter your Email"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control 
         type="password"
         value={user.password}
         name="password"
         onChange={handleChange}
         placeholder="Enter your Password"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
         type="password"
         value={user.confirmPassword}
         name="confirmPassword"
         onChange={handleChange}
         placeholder="Enter confirm Password"
          />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default SignUp;
