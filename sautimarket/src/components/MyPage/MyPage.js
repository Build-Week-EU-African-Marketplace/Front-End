import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../../auth/axiosWithAuth";
import { NavLink } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import { Button } from "../UI/Button/Button";

import "./mypage.css";

const initialValues = {
  name: "",
  department: "",
  description: "",
  price: "",
  category: "",
  location: ""
};

export default function MyPage({ addItem }) {
  const [formData, setFormData] = useState(initialValues);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleChange = e =>
    setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });

  const addProductItem = e => {
    e.preventDefault();
    console.log(formData);
    //addItem(formData)
  };

  const getAllUsers = () => {
      const options = {
          method:'GET',
          url:"https://lbs-african-marketplace.herokuapp.com/users"
      }
      axiosWithAuth(options)
      .then(resp=>{
          console.log(resp.data);
      })
      .catch(err =>{
        alert(err)
      })
  }
  // URL: string
  // user_id: integer, references the id of the user the item is referenced to

  return (
    <div>
      <div className="myp-center-align">
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}
          value="ADD ITEM"
        />
      </div>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={() => {
          setModalIsOpen(false);
        }}
      >
        <div className="register-container">
          <div className="register-form">
            <form onSubmit={addProductItem}>
              <h2>Add Item</h2>
              <div className="register-name">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                />
              </div>
              <div>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  type="text"
                />
              </div>
              <div>
                <select
                  required
                  name="department"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Department"
                >
                  <option value="seller">seller</option>
                  <option selected value="buyer">
                    buyer
                  </option>
                </select>
              </div>
              <div>
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
              </div>
              <div>
                <button type="submit">Add </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      <Button
      width="100px"
          onClick={getAllUsers}
          value="Get ALL users"
        />
    </div>
  );
}
