import { useSearchParams } from "react-router-dom";
import Blog from "../Blog/Blog";
import Spinner from "../Spinner/Spinner";
import PageNav from "../PageNav/PageNav";
import styles from "./BlogList.module.css";
import useBlogs from "./useBlogs";

function BlogList() {
  const { isLoading, blogs } = useBlogs();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  const allBlogs = blogs.blogs;
  const sortBy = searchParams.get("sort") || "id_asc";

  const sortedBlogs = [...allBlogs].sort((a, b) => {
    if (sortBy === "date_desc") return new Date(a.date) - new Date(b.date);
    if (sortBy === "date_asc") return new Date(b.date) - new Date(a.date);
    return a.id - b.id;
  });

  return (
    <div className={styles.blogListContainer}>
      <PageNav />
      <hr />
      <ul className={styles.blogList}>
        {sortedBlogs.map((blog) => {
          return <Blog blog={blog} key={blog.id} />;
        })}
      </ul>
    </div>
  );
}

export default BlogList;
