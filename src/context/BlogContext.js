import React, { useReducer, useState } from "react";
import BlogReducer from "../reducers/BlogReducer";
import uuid from "uuid/v4";
import initialBlogs from "../models/blogs.js";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogList, dispatch] = useReducer(BlogReducer, initialBlogs);

  const addBlog = (title, body, callback) => {
    dispatch({ type: "ADD_BLOG", title, body, id: uuid() });
    callback();
  };

  const deleteBlog = id => {
    dispatch({ type: "DELETE_BLOG", id: id });
  };

  const editBlog = (id, title, body, callback) => {
    dispatch({ type: "EDIT_BLOG", title, body, id });
    callback();
  };

  return (
    <BlogContext.Provider
      value={{
        data: blogList,
        addBlog: addBlog,
        deleteBlog: deleteBlog,
        editBlog: editBlog
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
