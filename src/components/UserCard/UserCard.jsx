import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './UserCard.module.css'

const UserCard = ({person}) => {
  return (
    <div className={style.contactCard}>
        <NavLink to={`/details/${person.id}`}>
            <div>{person.name}</div>
        </NavLink>
    </div>
  )
}

export default UserCard