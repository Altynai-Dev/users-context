import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddUser from './components/AddUser/AddUser'
import EditUser from "./components/EditUser/EditUser";
import UserDetails from "./components/UserDetails/UserDetails";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/edit/:id" element={<EditUser />} />
      <Route path="/details/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default MainRoutes;
