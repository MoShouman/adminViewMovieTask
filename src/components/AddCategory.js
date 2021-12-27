import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addCategory} from '../actions'

export default function AddCategory() {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // add new category handler
    const onSubmitHandler = (e, categoryName) => {
        if(name !== '' && description !== ''){
            e.preventDefault();
            dispatch(addCategory(categoryName))
            setName('');
            setDescription('');
        } else {
            alert('please enter the input field is empty')
        }
    }

    return (
        <div className='px-3 bg-white'>
            {/* add Categories form  */}

            <label className='mt-2'>
                Add Category
            </label>

            <br/>
            
            <div className='d-flex align-items-center pb-3'>

                <input    className='py-1 px-3' type='text' placeholder='English Name*'       value={name} 
                          onChange={(e) => {setName(e.target.value)}}></input>

                <textarea className='py-1 px-3' type='text' placeholder='English Description' value={description} 
                          onChange={(e) => {setDescription(e.target.value)}}></textarea>

                <button   className='btn btn-success' type='submit'  
                          onClick={(event) => {onSubmitHandler(event, name)}}>Create Category</button>
            </div>

            {/* add Categories form  */}
        </div>
    )
}
