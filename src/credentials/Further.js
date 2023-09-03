import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { further } from "../Features/User";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initial = {
  age: "",
  gender: "",
  dob: "",
  mobile: "",
};

const Further = () => {
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
    dispatch(further(user));
    navigate("/profile");
  };
  return (
    <div>
      {/* <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          value={user.age}
          name="age"
          onChange={handleChange}
          placeholder="Enter your age"
        />
        

        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={handleChange}
            checked={user.gender === "Male"}
          />
          Male
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={handleChange}
            checked={user.gender === "Female"}
          />
          Female
        </label>

        <input
          type="date"
          value={user.dob}
          name="dob"
          onChange={handleChange}
          placeholder="Enter your dob"
        />
        <input
          type="number"
          value={user.mobile}
          name="mobile"
          onChange={handleChange}
          placeholder="Enter mobile number"
        />


        <button type="submit">Submit</button>
      </form> */}

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your age</Form.Label>
        <Form.Control 
        type="number"
        value={user.age}
        name="age"
        onChange={handleChange}
        placeholder="Enter your age"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Check
            inline
              type="radio"
              value="Male"
              name="gender"
              onChange={handleChange}
              checked={user.gender === "Male"}
          /> Male
          <Form.Check
          inline
             type="radio"
             value="Female"
             name="gender"
             onChange={handleChange}
             checked={user.gender === "Female"}
          /> Female
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control 
          type="date"
          value={user.dob}
          name="dob"
          onChange={handleChange}
          placeholder="Enter your dob"
          />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control 
        type="number"
        value={user.mobile}
        name="mobile"
        onChange={handleChange}
        placeholder="Enter mobile number"
          />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default Further;
