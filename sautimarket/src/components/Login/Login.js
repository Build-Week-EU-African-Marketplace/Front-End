import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./login.css";
import Styled from "styled-components";

const Login = props => {
  const [existingUser, setExistingUser] = useState({
    username: "",
    password: ""
  });

  const [loginError, setloginError] = useState("");
  const submitInfo = (event, credentials) => {
    event.preventDefault();
    axios
      .post("https://lbs-african-marketplace.herokuapp.com/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        localStorage.setItem('token',res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => setloginError("Wrong username/password"));
  };

  const handleNewUser = event => {
    const { name, value } = event.target;
    setExistingUser({ ...existingUser, [name]: value });
  };

  return (
    <div className="LogInForm">
      <div>
        <StyledForm onSubmit={e => submitInfo(e, existingUser)}>
        <StyledH3>Sign in to Sauti Market</StyledH3>
        <p style={{ color: "red" }}>{loginError}</p>
        <Label><strong>Username *</strong></Label>
        <StyledInput
          type="text"
          value={existingUser.username}
          name="username"
          onChange={handleNewUser}
        />
        <Label><strong>Password *</strong></Label>
        <StyledInput
          type="text"
          value={existingUser.password}
          name="password"
          onChange={handleNewUser}
        />
        <StyledButton>Login</StyledButton>
        <StyledContent>
          You don't have an account? 
          <NavLink to="/Register"> Register</NavLink>
        </StyledContent>
      </StyledForm>
    </div>
    </div>
  );
};

export default Login;



const StyledForm = Styled.form`
    padding: 0px 30px 25px 30px;
    width: 400px;
    margin: 0 auto;
    position: relative;
    text-align: left;
    background: #CDD2CA;
    border: 1px solid red;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(255, 0, 0, 0.8);
    -moz-box-shadow: 0 1px 3px rgba(255, 0, 0, 0.8);
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
    font-weight: 400;
    font-size: 1rem;
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
    text-align:center;
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
