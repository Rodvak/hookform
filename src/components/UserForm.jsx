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
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text"  onChange={ handleFirstName } value={firstName} />
            </div>
            {
                firstNameError ?
                <p>{firstNameError}</p> :
                ""
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={lastName} />
                {
                    lastNameError ?
                    <p>{lastNameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail }value={email} />
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword }value={password} />
                {
                    passwordError ?
                    <p>{passwordError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirm }value={confirmPassword} />
                {
                    confirmError ?
                    <p>{confirmError}</p> :
                    ""
                }
            </div>
        </form>
        {/* USERINFO IS ANOTHER COMPONENT, YOU CAN ADD COMPONENTS INSIDE OTHER COMPONENTS AND WILL SHOW UP IN APP.JS */}
        <div>
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
