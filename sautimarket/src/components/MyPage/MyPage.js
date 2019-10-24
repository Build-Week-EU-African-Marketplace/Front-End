import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../auth/axiosWithAuth";
import { NavLink } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import { Button } from "../UI/Button/Button";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";
import Product from "../Products/Product";

import "./mypage.css";

const initialValues = {
  name: "Beef",
  //   department: "",
  description: "Freshly slaughtered beef",
  price: "200",
  category: "Animal Products",
  location: "Lagos,Nigeria",
  user_id: 16,
  URL: "https://via.placeholder.com/100"
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

function MyPage({ addItem, getItems, items, editItem, deleteItem }) {
  const [formData, setFormData] = useState(initialValues);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  const handleChange = e =>
    setFormData({ ...formData, ...{ [e.target.name]: e.target.value } });

  const addProductItem = e => {
    e.preventDefault();
    console.log(formData);
    if(formData.id) editItem(formData)
    else addItem(formData);

    setEditMode(false);
    setModalIsOpen(false)
  };

  const openEditModal = (item) => {
    setEditMode(true);
    setModalIsOpen(true);
    setFormData(item)
  };

  const getAllUsers = () => {
    const options = {
      method: "GET",
      url: "https://lbs-african-marketplace.herokuapp.com/users"
    };
    axiosWithAuth(options)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        alert(err);
      });
  };

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
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
              </div>
              <div>
                <button type="submit">{editMode ? "Edit Item": "Add Item"} </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {/* <Button width="100px" onClick={getAllUsers} value="Get ALL users" />
      <Button width="100px" onClick={getItems} value="Get ALL items" /> */}
      <div className="product-display">
        {items.map(item => {
          return (
            <Product
              key={item.id}
              {...item}
              canModify
              openEdit={()=>openEditModal(item)}
              deleteItem={() => deleteItem(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  actionCreators
)(MyPage);
