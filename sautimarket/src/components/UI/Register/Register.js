import React, { useState } from "react";
import axios from "axios";
import { getUrl } from "../../data/urlController";
import errHelper from "../../data/handleError";
import { useToast } from "@chakra-ui/core";
import Select from "react-select";
import countryList from "react-select-country-list";
import axiosWithAuth from "../../data/axiosAuth";
import {NavLink} from "react-router-dom";

import "./register.css";
const user = {
  first_name: "pere",
  last_name: "sola",
  email: "per@g.com",
  password: "per",
  username: "pere",
  country: "Spain",
  country_code: "es",
  rating: 1,
  image_url: "https://via.placeholder.com/150"
};

const countryLists = countryList().getData();


const tournament = {
  name: "Lambda Tourney",
  status: "active",
  current_stage: 1,
  stage_completed: false,
  no_of_participants: 4,
  max_players_per_group: 2,
  tournament_host: "5da76e0d04a711001e58efea",
  participants: [
    "5da76e0d04a711001e58efea",
    "5da76eb404a711001e58efec",
    "5da76eef04a711001e58efed",
    "5da76f3c04a711001e58efee"
  ]
};

const initialValues = {
  email: "",
  password: "",
  country: "",
  first_name: "",
  last_name: "",
  username:""
};

export default function Register(props) {
  const [formData, setFormData] = useState(initialValues);
  const [valueObj, setValueObj] = useState({});
  const toast = useToast();

  const handleError = err => errHelper(err, toast);

  const handleChange = e =>
    setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });

  const changeHandler = (valueObj) => {
    // setFormData({ value });
    console.log(valueObj);
    setValueObj(valueObj)
    const {value,label} = valueObj;
    setFormData({ ...formData, ...{ country: label,country_code:value } });
  }

  const register = (e) => {
    if(e) e.preventDefault();
    console.log("regi");
    const options = {
      method: "POST",
      url: getUrl("users") + "/register",
      headers: {
        "Content-Type": "application/json"
      },
      data: formData
    };
    axios(options)
      .then(resp => {
        props.history.replace("/login");
      })
      .catch(handleError);
  };

  const createTourney = () => {
    console.log("regi");
    const options = {
      method: "POST",
      url: getUrl("tournaments"),
      headers: {
        "Content-Type": "application/json"
      },
      data: tournament
    };
    axiosWithAuth(options)
      .then(resp => {
        const data = resp.data;
        console.log(data);
      })
      .catch(handleError);
  };

  return (
    <div className="register-container">
    <div className="register-form">
      <form  onSubmit={register}>
        <h2><span className="word-w">W</span>ord<span>Game</span></h2>
        <div className="register-name">
        <div>
          <input
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="first_name"
          />
        </div>
        <div>
          <input
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="last_name"
          />
        </div>
        </div>
        <div>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div>
        <Select placeholder="Select Country" options={countryLists} value={valueObj} onChange={changeHandler} />
      </div>
      <div>
        <button type="submit">register </button>
      </div>
      </form>
      <div className="login-option">
        <p>Already have an account ? <span><NavLink to="/login">Login</NavLink></span></p>
      </div>
    </div>

    </div>
  );
}
