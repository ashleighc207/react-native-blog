const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [
        ...state,
        { title: action.title, body: action.body, id: action.id }
      ];
    case "EDIT_BLOG":
      return state.filter(blog => {
        blog.id === action.id
          ? (blog: { title: action.title, body: action.body })
          : blog;
      });
    case "DELETE_BLOG":
      return state.filter(blog => {
        return blog.id !== action.id;
      });
    default:
      return;
  }
};

export default BlogReducer;
