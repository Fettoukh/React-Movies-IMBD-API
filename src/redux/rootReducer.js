import { combineReducers} from 'redux'
import searchReducer from './search/searchReducer'

const rootReducer = combineReducers({
    movies : searchReducer
})

export default rootReducer