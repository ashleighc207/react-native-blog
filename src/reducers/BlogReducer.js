const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, { title: action.title, body: action.body }];
    case "EDIT_BLOG":
      return;
    case "DELETE_BLOG":
      return;
    default:
      return;
  }
};

export default BlogReducer;
