import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/User";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import { wrapper, container, styledLabel, button, formControl, warning } from "../style";
import { Api_URL } from "../URL";
import axios from "axios";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const userData = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
  
    if (form.checkValidity() === false) {
      setValidated(true); // Show validation errors
      return;
    }
  
    // Reset validation status
    setValidated(false);

    try {
        const response = await axios.post(`${Api_URL}login`, user);
        if (response.status === 200) {
          console.log("Login successful");
          dispatch(login(user));
          navigate("/further");
          sessionStorage.setItem("email", user.email);
        } else {
          setShow(true);

          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
  };

  return (
    <div style={wrapper}>
      <div style={container}>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          <p style={warning}>If not signed Up please <Link to="/signup" >sign up</Link></p>
          
          

          <Button variant="primary" type="submit" style={button}>
            Submit
          </Button>
        </Form>

        {show ? (
          <Toast>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Alert</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Please Enter correct Email and password</Toast.Body>
          </Toast>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Login;
