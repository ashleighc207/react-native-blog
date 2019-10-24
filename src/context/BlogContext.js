import React, { useReducer, useState } from "react";
import BlogReducer from "../reducers/BlogReducer";
import uuid from "uuid/v4";
import initialBlogs from "../models/blogs.js";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogList, dispatch] = useReducer(BlogReducer, initialBlogs);
  const [title, setTitle] = useState("Woff Blep");
  const [body, setBody] = useState(
    "What a nice floof doggorino fluffer borkf extremely cuuuuuute, puggo tungg long bois. Extremely cuuuuuute stop it fren maximum borkdrive, fat boi. Noodle horse much ruin diet adorable doggo!"
  );
  const addBlog = () => {
    dispatch({ type: "ADD_BLOG", title, body, id: uuid() });
  };

  return (
    <BlogContext.Provider value={{ data: blogList, addBlog: addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
