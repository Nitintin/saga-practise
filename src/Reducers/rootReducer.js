import { commentReducer } from './comments.reducer'
import { postReducer } from './posts.reducer'
import { userReducer } from './user.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    comments: commentReducer,
    posts: postReducer,
    users: userReducer
});

export default rootReducer