import React, { useReducer, useState } from "react";
import BlogReducer from "../reducers/BlogReducer";
import uuid from "uuid/v4";
import initialBlogs from "../models/blogs.js";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogList, dispatch] = useReducer(BlogReducer, initialBlogs);

  const addBlog = (title, body) => {
    dispatch({ type: "ADD_BLOG", title, body, id: uuid() });
  };

  const deleteBlog = id => {
    dispatch({ type: "DELETE_BLOG", id: id });
  };

  return (
    <BlogContext.Provider
      value={{ data: blogList, addBlog: addBlog, deleteBlog: deleteBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
