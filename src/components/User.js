import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, removeUser } from '../Actions';
import './User.css';


function User () {
    
    const usersArray = useSelector(state => state.User)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const handleOnClickRemove = (id) =>{
        dispatch(removeUser(id))
    }

    const getSingleUser = usersArray.map((user, i) => {
        return (
                <div key= {i+1} className='content'>
                    <p key= {i+2} className='user'>{user.firstName}</p>
                    <p key= {i+3} className='user'>{user.lastName}</p>
                    <p key= {i+4} className='user'>{user.email}</p>
                    <button id={user.id} onClick={() => handleOnClickRemove(user.id)} className='deleteButton'>Delete</button>
                </div>
            )
        })

    return(
        <div className='parentUserContainer'>
            {getSingleUser}
        </div>
    )
}

export default User;