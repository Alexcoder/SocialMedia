import { FETCH_ALL, CREATE,UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

//create action creators

export const getPosts = () => async (dispatch)=> {
    try{
        const {data} = await api.fetchPosts();   //fetchPosts is = axios.get(url); where url='http://localhost:5000/posts' 
        dispatch({ type: FETCH_ALL , payload: data })

    } catch (error){
       console.log(error);
    }
} 


export const createPost = (post) => async (dispatch)=> {
    try{
        const {data} = await api.createPost(post);  //createPost is = (newPost) => axios.post(url, newPost);  where url='http://localhost:5000/posts'  
        dispatch({ type: CREATE , payload: data });

    } catch (error){
       console.log(error);
    }
} 

export const updatePost =(id, post) => async(dispatch) => {
    try{
        const {data} = await api.updatePost(id, post);
        dispatch({ type: UPDATE,  payload: data})
    } catch(error){ 
         console.log(error)

    } 
}

export const deletePost =(id)=> async(dispatch)=>{
    try{
      api.deletePost(id);
      dispatch({type: DELETE, payload: id})
    } catch(error){
      console.log(error)
    }
}

export const likePost =(id)=> async(dispatch)=>{
  const user = JSON.parse(localStorage.getItem('profile'));
  
  try{
    const {data} = await api.likePost(id, user?.token);
    dispatch({ type: UPDATE, payload: data})

  }catch(error){
    console.log(error);
  }
}
