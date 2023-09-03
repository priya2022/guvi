import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { further } from "../Features/User";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {wrapper,container, styledLabel, button} from '../style'



const initial = {
  age: "",
  gender: "",
  dob: "",
  mobile: "",
};

const Further = () => {
  const [user, setUser] = useState(initial);
  const [validated, setValidated] = useState(false);

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
    dispatch(further(user));
    navigate("/profile");
  };
  return (
    <div style={wrapper}>
      <div style={container}>
        <Form onSubmit={handleSubmit} noValidate validated={validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Enter your age</Form.Label>
             <Form.Control  
      required
              type="number"
              value={user.age}
              name="age"
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Gender</Form.Label>
            <Form.Check
              inline
              type="radio"
              value="Male"
              label="Male"
              name="gender"
              onChange={handleChange}
              checked={user.gender === "Male"}
            />{" "}
            <Form.Check
              inline
              type="radio"
              value="Female"
              name="gender"
              label="Female"
              onChange={handleChange}
              checked={user.gender === "Female"}
            />{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={styledLabel}>Date of Birth</Form.Label>
             <Form.Control  
      required
              type="date"
              value={user.dob}
              name="dob"
              onChange={handleChange}
              placeholder="Enter your dob"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={styledLabel}>Contact Number</Form.Label>
             <Form.Control  
      required
              type="number"
              value={user.mobile}
              name="mobile"
              onChange={handleChange}
              placeholder="Enter mobile number"
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

export default Further;
