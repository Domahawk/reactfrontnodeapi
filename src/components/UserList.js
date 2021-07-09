import React from 'react';
import './UserList.css';
import User from './User';

function UserList () {

    return (
        <div className='bigDaddyContainer'>
            <div className='parenth1Container'>
                <h1 className='childElement'>First Name</h1>
                <h1 className='childElement'>Last Name</h1>
                <h1 className='childElement'>Email</h1>
            </div> 
            <User/>
        </div>

    )
}

export default UserList;