import React, { useState } from 'react'
import Router from './Router'
import Form from 'react-bootstrap/Form';


const App = () => {
  // const [dark,setDark]= useState(false)

  // const handleChange =(e)=>{
  //   setDark( e.target.checked === true)
  //   console.log("dark",dark)
  // }
  return (
    <div >
      {/* <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
        onChange={handleChange}
        checked={dark}
        
      />
      </Form> */}
    <Router />
    

    </div>

  )
}

export default App