import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../Features/User";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { button, container, styledLabel, wrapper } from "../style";

const initial = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [validated, setValidated] = useState(false);

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
    <div style={wrapper}>
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
            />
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
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={button}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
