import React, { useContext, useEffect } from 'react'
import { usersContext } from '../../context/UsersContext'
import UserCard from '../UserCard/UserCard'

const UsersList = () => {
    const {users, getUsers} = useContext(usersContext)


    useEffect(()=>{
        getUsers()
    }, [])

  return (
    <div>
        {users.map((person)=>(
            <UserCard key={person.id} person={person} />
        ))}
    </div>
  )
}

export default UsersList