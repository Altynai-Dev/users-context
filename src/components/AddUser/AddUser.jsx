import React, { useContext, useState } from "react";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
import {usersContext} from '../../context/UsersContext'

const AddUser = () => {
  const { addUser, getUsers } = useContext(usersContext);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");

const navigate = useNavigate('/')
  const handleClick = () => {
    if(!name || !image || !image ){
      return
    }
    let newUser = {
      name,
      position,
      image
    };

    addUser(newUser);

    setName("");
    setPosition("");
    setImage("");

    getUsers();
    navigate('/')
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="имя"
      />
      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="должность"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="изображение"
      />
      <button onClick={handleClick}>Add</button>
      <Home />
    </div>
  );
};

export default AddUser;
