import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING,
    CLEAR
} from './searchTypes'

const intialState = {
    text : '',
    movies : [],
    loading : false,
    movie : []
}

const searchReducer = (state= intialState , action) => {
    switch(action.type) {
        case SEARCH_MOVIE : 
            return {
                ...state,
                text : action.payload,
                loading : false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case FETCH_MOVIE:
            return {
                ...state,
            movie: action.payload,
            loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case CLEAR : 
            return {
                text : '',
                movies : [],
                loading : false,
                movie : []
            }
        default : 
            return state
    }
}

export default searchReducer