import { useBlog } from "../../context/BlogContext";
import Blog from "../Blog/Blog";
import Spinner from "../Spinner/Spinner";
import PageNav from "../PageNav/PageNav";
import styles from "./BlogList.module.css";

function BlogList() {
  const { blogs, isLoading } = useBlog();
  return (
    <div className={styles.blogListContainer}>
      <PageNav />
      <hr />
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className={styles.blogList}>
          {blogs.map((blog) => {
            return <Blog blog={blog} key={blog.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default BlogList;
