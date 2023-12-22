'use client'
import { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  posts: [],
};

export const BlogContext = createContext();

const blogReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case 'FETCH_POSTS':
      return { ...state, posts: action.payload }; 
    case 'ADD_POST':
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  console.log(state,"ststae");
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/posts');
      dispatch({ type:'FETCH_POSTS', payload: response.data           
    });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (newPost) => {
    // try {
    //   const response = await axios.post('https://my-json-server.typicode.com/abhinash199/demo/posts', newPost);
    //   console.log(response,"rrrrrr");
    //   dispatch({ type: 'ADD_POST', payload: response.data });
    // } catch (error) {
    //   console.error('Error adding post:', error);
    // }

    fetch('http://localhost:8000/posts/', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
      })
      .then(response => 
        response.json())
      
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', JSON.stringify(response)));
  };

  return (
    <BlogContext.Provider
     value={{ ...state, fetchPosts, addPost }}
     >
      {children}
    </BlogContext.Provider>
  );
};
