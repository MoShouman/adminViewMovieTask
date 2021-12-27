import * as actionTypes from './actionTypes'

export const addCategory = (categoryName) => {
    return {
        type:actionTypes.ADD_CATEGORY,
        payload:{
            id:1,
            name:categoryName,
            movies:[]
        }
    }
}

export const addMovie = (categoryId, movie) => {
    return {
        type:actionTypes.ADD_MOVIE,
        payload:{
            categoryId,
            movie
        }
    }
}

export const editMovie = (categoryId, movieId, newData) => {
    return {
        type:actionTypes.EDIT_MOVIE,
        payload:{
            categoryId,
            movieId,
            newData
        }
    }
}

export const deleteMovie = (categoryId, movieId) => {
    return {
        type:actionTypes.DELETE_MOVIE,
        payload:{
            categoryId,
            movieId
        }
    }
}