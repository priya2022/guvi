import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { further } from "../Features/User";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from 'react-bootstrap/Toast';
import { wrapper, container, styledLabel, button } from "../style";
import { Api_URL } from "../URL";
import axios from "axios";

const initial = {
  age: "",
  gender: "",
  dob: "",
  mobile: "",
};
const toastMsg={
  backgroundColor:"lightgreen",
  color:"black",
  fontSize:"18px",
}
const Further = ({dark}) => {
  const [user, setUser] = useState(initial);
  const [validated, setValidated] = useState(false);
  const [show,setShow]=useState(false)

  const toggleShow=()=>setShow(!show)

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
  
    // Reset validation status
    setValidated(false);

      const email = sessionStorage.getItem("email");
      console.log("email", email);
      e.preventDefault();
      try {
        const response = await axios.patch(`${Api_URL}update/${email}`, user);
        console.log("response", response);
        if (response.status === 200) {
          console.log("okay", user);
          dispatch(further(user));
          setShow(true)
          
        } else {
          console.error("Resource update failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    
  };
  return (
    <div style={wrapper(dark)}>
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
            <Form.Label style={styledLabel}>Gender</Form.Label> &nbsp;
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

      {
      show && (<>
        <Toast onClose={toggleShow} style={toastMsg}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Success</strong>
      </Toast.Header>
      <Toast.Body>Data has been added successfully.</Toast.Body>
    </Toast>
      </>)
      
      }
        
        </Form>
      </div>
    </div>
  );
};

export default Further;



