import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/posts';


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await api.get('/');
    dispatch({ 
      type: 'posts/fetchPosts', 
      payload: data 
    });
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; 
  }
};

export const addPost = (postData) => async (dispatch) => {
  try {
    const { data } = await api.post('/', postData);
    dispatch({ 
      type: 'posts/addPost', 
      payload: data 
    });
    return data; 
  } catch (error) {
    console.error('Error creating post:', error);
    throw error; 
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.delete(`/${id}`);
    dispatch({ 
      type: 'posts/deletePost', 
      payload: id 
    });
    return id; 
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};