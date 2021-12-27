import React, {useState} from 'react'
import Movie from './Movie'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions'

export default function Category({category}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [forceUpdate, setforceUpdate] = useState(true)

    //add new movie handler
    const addMovieHandler = (e, categoryId, movie) => {
        if(newName !== '' && newDescription !== ''){
            e.preventDefault();
            dispatch(addMovie(categoryId, movie))
            setName('');
            setDescription('');
        } else {
            alert('please enter the input field is empty')
        }
    }


    return (
        <div className="dropdown" key={category.id}>
                <a class="btn btn-secondary" data-toggle="collapse" href={"#collapseExample"+category.id} role="button" aria-expanded="false" aria-controls={"collapseExample"+category.id}>
                    <i className="fa fa-bars mr-1"></i>
                    {category.name}
                </a>
                
                {/* add movies form  */}
                <div className="collapse p-3 mx-4 mb-2 bg-grey" id={"collapseExample"+category.id}>
                    <p>Name*:<span className='ml-2'>{name}</span></p>
                    <p>description:<span className='ml-2'>{description}</span></p>
                    <label className='mt-2'>
                        Movies
                    </label>
                    <br/>
                    <div className='d-flex align-items-center pb-3'>
                        <input type='text' placeholder='English Name*' value={newName} onChange={(e) => {setNewName(e.target.value)}} className='py-1 px-3'></input>
                        <textarea type='text' placeholder='English Description' value={newDescription} onChange={(e) => {setNewDescription(e.target.value)}} className='py-1 px-3'></textarea>
                        <button type='submit' className='btn btn-success' onClick={(event) => {addMovieHandler(event, category.id, {id:'',name:newName, description:newDescription, rate:''}); setNewName(''); setNewDescription('')}}>Create</button>
                    </div>
                {/* add movies form  */}

                {/* render movies  */}

                    {
                        category.movies.map((movie) => (
                            <Movie  movie={movie} 
                                    categoryId={category.id} 
                                    setDescription={setDescription} 
                                    setName={setName}
                                    forceUpdate={forceUpdate}
                                    setforceUpdate={setforceUpdate}/>
                        ))
                    }
                {/* render movies  */}

            </div>
        </div>
    )
}
