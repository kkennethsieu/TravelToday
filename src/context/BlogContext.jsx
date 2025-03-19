import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:9000";

const BlogContext = createContext();

const initialState = {
  blogs: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "blogs/loaded":
      return { ...state, isLoading: false, blogs: action.payload };
    case "blogs/new":
      return {
        ...state,
        isLoading: false,
        blogs: [...state.blogs, action.payload],
      };
    case "blogs/sortAsc":
      return {
        ...state,
        blogs: [...state.blogs].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        ),
      };

    case "blogs/sortDesc":
      return {
        ...state,
        blogs: [...state.blogs].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      };

    case "blogs/sortIdAsc":
      return {
        ...state,
        blogs: [...state.blogs].sort((a, b) => Number(a.id) - Number(b.id)),
      };

    case "blogs/delete":
      return {
        ...state,
        isLoading: false,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Error reducer");
  }
}

function BlogProvider({ children }) {
  const [{ blogs, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchBlogs() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/blogs`);
        if (!res.ok) throw new Error("Error fetching data");
        const data = await res.json();
        dispatch({ type: "blogs/loaded", payload: data });
      } catch {
        dispatch({ type: "rejected", payload: "Error loading blogs" });
      }
    }
    fetchBlogs();
  }, []);

  async function addNewBlog(newBlog) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/blogs`, {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to create blog");
      }
      const data = await res.json();
      dispatch({ type: "blogs/new", payload: data });
      console.log(data);
    } catch {
      dispatch({ type: "rejected", payload: "Error creating blog" });
    }
  }

  function deleteBlog(id) {
    dispatch({ type: "blogs/delete", payload: id });
  }

  function sortBlogsAsc() {
    dispatch({ type: "blogs/sortAsc" });
  }

  function sortBlogsDesc() {
    dispatch({ type: "blogs/sortDesc" });
  }
  function sortBlogsByIdAsc() {
    dispatch({ type: "blogs/sortIdAsc" });
  }

  // (THIS IS IF YOU WANT TO PERMANENTLY  DELETE BLOGS)
  // async function deleteBlog(id) {
  //   try {
  //     dispatch({ type: "loading" });
  //     await fetch(`${BASE_URL}/blogs/${id}`, {
  //       method: "DELETE",
  //     });

  //     dispatch({ type: "blogs/delete", payload: id });
  //   } catch {
  //     dispatch({ type: "rejected", payload: "Error deleting blog" });
  //   }
  // }

  return (
    <BlogContext.Provider
      value={{
        blogs,
        isLoading,
        addNewBlog,
        deleteBlog,
        sortBlogsAsc,
        sortBlogsDesc,
        sortBlogsByIdAsc,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error("BlogContext was used outisde of the BlogProvider.");
  return context;
}

export { BlogProvider, useBlog };
