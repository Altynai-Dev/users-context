import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usersContext } from '../../context/UsersContext'

const EditUser = () => {
    const {editUserFunc, userDetails, getUserDetails} = useContext(usersContext)

    const {id} = useParams();

    const [editName, setEditName] = useState(userDetails.name)
    const [editPosition, setEditPosition] = useState(userDetails.position)
    const [editImg, setEditImg] = useState(userDetails.image)
    const navigate = useNavigate()
    useEffect(()=>{
        getUserDetails(id)
    }, [])

    const handleClick = () =>{
        let editedUser = {
            name: editName,
            position: editPosition,
            image: editImg
        }
        editUserFunc(editedUser, id);
        navigate("/")
    }
  return (
    <div>
        <input 
        type="text"
        value={editName}
        onChange={(e)=>setEditName(e.target.value)}
        placeholder='name' 
        />
        <input type="text"
        value={editPosition}
        onChange={(e)=>setEditPosition(e.target.value)}
        placeholder='poaition' 
        />
        <input type="text"
        value={editImg}
        onChange={(e)=>setEditImg(e.target.value)}
        placeholder='image' 
        />
        <button onClick={handleClick}>Edit</button>
    </div>
  )
}

export default EditUser