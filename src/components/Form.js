import React from 'react';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, savePostData } from '../Actions';
import { ValidateEmail } from '../utils';

function Form () {

    const postData = useSelector(state => state.Post)
    const dispatch = useDispatch()

    const saveDataToGlobalState = (getFirstName, getLastName, getEmail) => {
        dispatch(savePostData(
            {
                firstName: getFirstName,
                lastName: getLastName,
                email: getEmail
            }
        ))
    }

    const handleSaveOnChangeFirstName = (data) => {
        saveDataToGlobalState(data.target.value, postData.lastName, postData.email)
    }

    const handleSaveOnChangeLastName = (data) => {
        saveDataToGlobalState(postData.firstName, data.target.value, postData.email)
    }

    const handleSaveOnChangeEmail = (data) => {
        saveDataToGlobalState(postData.firstName, postData.lastName, data.target.value)
    }

    const handlePostCall = () => {
        if (ValidateEmail(postData.email)) {
            dispatch(postUser(postData))
            const htmlElementCollection = document.getElementsByClassName('inputFieldLabel')
            for(let i=0;i<htmlElementCollection.length;i++){
                htmlElementCollection[i].value = ''
            }
            
        }else {
            alert('Email you have entered is not valid')
        }
    }

    return(
        <div>
            <div name='theForm' className='formParent'>
                <input onChange= {handleSaveOnChangeFirstName} className='inputFieldLabel' type='text' placeholder='Enter First Name'></input>
                <input onChange= {handleSaveOnChangeLastName} className='inputFieldLabel' type='text' placeholder='Enter Last Name'></input>    
                <input onChange= {handleSaveOnChangeEmail} required className='inputFieldLabel' type='email' placeholder='Enter Email'></input>
                <button className='submitButton' onClick={handlePostCall}>Submit</button>  
            </div>
        </div>
    )  
}

export default Form;