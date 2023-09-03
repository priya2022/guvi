import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { name, age, dob, email, password, mobile, gender } = useSelector((state) => state.user.value);

  return (
    <div>
        <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{dob}</li>
            <li>{email}</li>
            <li>{password}</li>
            <li>{mobile}</li>
            <li>{gender}</li>
        </ul>
    </div>
  )
}

export default Profile
