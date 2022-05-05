import React, { useState } from  'react';
import UserInfo from './UserInfo';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // ERROR Handeling
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    
    // This creates a User.
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name has to be at least 2 characters")
        } else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name has to be at least 2 characters")
        } else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email name has to be at least 5 characters")
        } else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password has to be at least 8 characters")
        } else{
            setPasswordError("")
        }
    }
    const handleConfirm = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setConfirmError("Password must match")
        } else{
            setConfirmError("")
        }
    }



    
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'></div>
                <div className='col bg-light'>
        <form onSubmit={ createUser }>
            <div className='mb-3' >
                <label className='form-label'>First Name: </label> 
                <input className='form-control' type="text"  onChange={ handleFirstName } value={firstName} />
            {
                firstNameError ?
                <p>{firstNameError}</p> :
                ""
            }
            </div>     
            <div className='mb-3'>
                <label className='form-label' >Last Name: </label> 
                <input className='form-control' type="text" onChange={ handleLastName } value={lastName} />
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ""
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Email Address: </label> 
                <input className='form-control' type="text" onChange={ handleEmail }value={email} />
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ""
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Password: </label>
                <input className='form-control' type="password" onChange={ handlePassword }value={password} />
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ""
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Confirm Password: </label>
                <input className='form-control' type="password" onChange={ handleConfirm }value={confirmPassword} />
                {
                    confirmError ?
                    <p>{confirmError}</p> :
                    ""
                }
            </div>
        </form>
        </div>
        <div className='col'></div>
        </div>
        {/* USERINFO IS ANOTHER COMPONENT, YOU CAN ADD COMPONENTS INSIDE OTHER COMPONENTS AND WILL SHOW UP IN APP.JS */}
        <div className='container'>
         <UserInfo 
        firstName = {firstName}
        lastName = {lastName}
        email = {email}
        password = {password}
        confirmPassword = {confirmPassword}
        />

        </div>
        </div>

     
    );
};
    
export default UserForm;
