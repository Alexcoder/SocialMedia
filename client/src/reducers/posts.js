import {FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// eslint-disable-next-line
export default (posts = [] , action) => { 
    //state= posts in this case
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        case DELETE :
             return posts.filter((Ifeanyi)=> Ifeanyi._id !==action.payload ) //keep only  Ifeanyi._id is not equal to action.payload

        case UPDATE :
        // case LIKE :
            return posts.map((post)=> post._id === action.payload._id ? action.payload :  post)
    
        default:
            return posts;
    }
}
// we export default because we want to use it in combineReducers index.js
