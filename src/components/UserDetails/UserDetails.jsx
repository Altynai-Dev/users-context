import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { usersContext } from '../../context/UsersContext';
import style from './UserDetails.module.css'

const UserDetails = () => {
    const {id} = useParams();
    const {getUserDetails, userDetails, deleteUser} = useContext(usersContext)

    useEffect(()=>{
        getUserDetails(id)
    }, [])
  return (
    <div className={style.contactDetails}>
        <h1>{userDetails.name}</h1>
        <img src={userDetails.image} />
        <p>{userDetails.position}</p>
        <NavLink to={`/edit/${id}`}>
            <button>Edit</button>
        </NavLink>
        <NavLink to='/'>
            <button onClick={()=>deleteUser(id)}>Delete</button>
        </NavLink>
    </div>
  )
}

export default UserDetails