"use client";
import { createContext, useReducer } from "react";
import axios from "axios";

//initialise posts value
const initialState = {
  posts: [],
};

// Create context
export const BlogContext = createContext();

//blog reducer function
const blogReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

// Blog provider function
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  //fetch Post function
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts`
      );
      dispatch({ type: "FETCH_POSTS", payload: response.data });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  //add post function
  const addPost = async (newPost) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/posts`,
        newPost,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch({ type: "ADD_POST", payload: response.data });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <BlogContext.Provider value={{ ...state, fetchPosts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};
