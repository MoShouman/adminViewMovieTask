import * as actions from './actionTypes'


export default function reducer(state = [], action){
    
    if(action.type === actions.ADD_CATEGORY)
    {
        return [...state, action.payload];

    } else if(action.type === actions.ADD_MOVIE){
       
        const categoryIndex = state.findIndex((category) => category.id === action.payload.categoryId)
        let categoriesTemp = state;
        categoriesTemp[categoryIndex].movies = [...categoriesTemp[categoryIndex].movies ,{...action.payload.movie}]

        return categoriesTemp
        
    } else if(action.type === actions.DELETE_MOVIE){

        const categoryIndex = state.findIndex((category) => category.id === action.payload.categoryId)
        let categoriesTemp = state;
        categoriesTemp[categoryIndex].movies = categoriesTemp[categoryIndex].movies.filter((movie) => movie.id !== action.payload.movieId)

        return categoriesTemp
    
    } else if (action.type === actions.EDIT_MOVIE){
        
        const categoryIndex = state.findIndex((category) => category.id === action.payload.categoryId)
        let categoriesTemp = state;
        const movieIndex = categoriesTemp[categoryIndex].movies.findIndex((movie) => movie.id === action.payload.movieId)
        categoriesTemp[categoryIndex].movies[movieIndex] = {...action.payload.newData}
        console.log(categoriesTemp)

        return categoriesTemp

    } else {

        return state;
        
    }
}