import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
import "./register.css";


const Register = props => {
  const [newUser, setNewUser] = useState({ username: "", password: "", department: "" });

  const submitInfo = (event, credentials) => {
    event.preventDefault();
    axios
      .post(
        " https://lbs-african-marketplace.herokuapp.com/auth/register",
        credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.authToken);

        console.log(res.data);
        props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  const handleNewUser = event => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <StyledForm onSubmit={e => submitInfo(e, newUser)}>
        <StyledH3>Please enter your credentials to sign up</StyledH3>
        <Label>Username</Label>
        <StyledInput
          type="text"
          value={newUser.username}
          name="username"
          onChange={handleNewUser}
        />
        <Label>Password</Label>
        <StyledInput
          type="text"
          value={newUser.password}
          name="password"
          onChange={handleNewUser}
        />
        <Label>Department</Label>
        <StyledInput
          type="text"
          value={newUser.department}
          name="department"
          onChange={handleNewUser}
        />
        <StyledButton>Register</StyledButton>
        <StyledContent>
          Do you have an account?
          <NavLink to="/Login">Log in</NavLink>
        </StyledContent>
      </StyledForm>
    </div>
  );
};

export default Register;

//styles

const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 400px;
    margin: 0 auto;
    position: relative;
    text-align: left;
    background: #FF0080;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
    width: 188px;
    padding: 10px 25px;
    margin: 0 auto;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #9d9e9e;
    text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
    background: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
    text-align:center
`;

const StyledButton = Styled.button`
    background: #871f78;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    width: 80%
    margin: 0 auto;
    margin-top:25px;
    font-weight:bold;
    font-size:14px;
    height:50px;
    border-radius:5px
    &:hover{
    background: #D8BFD8
    }
`;

const StyledContent = Styled.div`
    text-align: center;
    margin-top:15px
`;
