import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteMovie, editMovie } from '../actions'


export default function Movie(props) {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    
    // select movie handler and display the name and description of the movie on the top of each category section
    const selectMovieHandler = (event, movie) => {
        event.preventDefault();
        props.setName(movie.name)
        props.setDescription(movie.description)
    }

    // edit movie handler
    const editMovieHandler  = (e, categoryId, movieId, newData) => {
        if(newName === '')
            newData.name = props.movie.name    
        if(newDescription === '')
            newData.description = props.movie.description    
        if(newName === '' && newDescription === '')
            return;

        e.preventDefault();
        dispatch(editMovie(categoryId, movieId, newData))
        setNewName('');
        setNewDescription('');
        props.setforceUpdate(!props.forceUpdate)
    }

    // delete movie handler
    const onDeleteHandler = (e, categoryId, movieId) => {
        e.preventDefault();
        dispatch(deleteMovie(categoryId, movieId))
        setNewName('');
        setNewDescription('');
    }


    return (
        <div className='p-3'>
            
            {/* movie name, delete and edit buttons */}
            <button class="btn btn-primary d-flex justify-content-between align-items-center" type="button"  onClick={(event) => {selectMovieHandler(event, props.movie)}}> 
                <div>
                    <i className="fa fa-bars mr-3"></i>
                    {props.movie.name}
                </div>
                <div className='mr-3'>
                    <button class="btn btn-warning mr-3 px-4" type="button" data-toggle="collapse" data-target={"#collapse"+props.movie.id} 
                    aria-expanded="false" aria-controls={"#collapse"+props.movie.id}>
                        Edit
                    </button>
                    <button type="button" onClick={(e) => {onDeleteHandler(e, props.categoryId, props.movie.id)}} className="btn btn-danger px-4">Delete</button>
                </div>
            </button>
            {/* movie name, delete and edit buttons */}

            {/* Edit movie form  */}
            <div class="collapse" id={"collapse"+props.movie.id}>
                <div class="card card-body">
                    <label className='mt-2'>
                        Change info
                    </label>
                    <br/>
                    <div className='d-flex align-items-center pb-3'>
                        <input    className='py-1 px-3' type='text' placeholder='English Name*'       value={newName}        onChange={(e) => {setNewName(e.target.value)}} ></input>
                        <textarea className='py-1 px-3' type='text' placeholder='English Description' value={newDescription} onChange={(e) => {setNewDescription(e.target.value)}}></textarea>
                        <button   className='btn btn-success' type='submit' onClick={(event) => {editMovieHandler(event, props.categoryId, props.movie.id, {id:props.movie.id,name:newName, description:newDescription, rate:props.movie.rate}); }}>Create</button>
                    </div>
                </div>
            </div>
            {/* Edit movie form  */}

        </div>
    )
}
