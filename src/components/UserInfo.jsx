import React from 'react'

const UserInfo = (props) => {
  return (
    <div>
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        <h3>Email: {props.email}</h3>
        <h3>Password: {props.password}</h3>
        <h3>Confirm Pasword: {props.confirmPassword}</h3>
    </div>
  )
}

export default UserInfo
