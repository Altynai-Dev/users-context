import axios from "axios";
import React, { createContext, useReducer } from "react";
export const usersContext = createContext();

const API = "http://localhost:8000/users";

const INIT_STATE = {
  users: [],
  userDetails: {}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
      case "GET_USER_DETAILS":
        return {...state, userDetails: action.payload}
    default:
      return state;
  }
};


const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addUser = async (user) => {
    await axios.post(API, user);
  };

  const getUsers = async () => {
    const { data } = await axios.get(`${API}`);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const getUserDetails = async(id) =>{
    const {data} = await axios.get(`${API}/${id}`);
    dispatch ({
      type: "GET_USER_DETAILS",
      payload: data
    })
  }
  const deleteUser = async(id)=>{
    await axios.delete(`${API}/${id}`)
  }

  const editUserFunc = async (editedUser, id)=>{
    await axios.patch(`${API}/${id}`, editedUser)
  }

  return (
    <usersContext.Provider
      value={{
        userDetails: state.userDetails,
        users: state.users,
        addUser,
        getUsers,
        deleteUser,
        editUserFunc,
        getUserDetails
      }}
    >
      {children}
    </usersContext.Provider>
  );
};

export default UserContextProvider;

