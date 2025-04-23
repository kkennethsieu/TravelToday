import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import { useAuth } from "../../context/AuthContext";
import useDeleteBlog from "./useDeleteBlog";

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default function Blog({ blog }) {
  const { isAuthenticated } = useAuth();
  const { img, location, date, title, description, id } = blog;

  const { isLoading, deleteBlog, isError, error } = useDeleteBlog();

  function handleDelete(deleteId) {
    deleteBlog(deleteId);
  }

  return (
    <li className={styles.blog}>
      {isAuthenticated && (
        <>
          <button
            className={styles.deleteBtn}
            disabled={isLoading}
            onClick={() => handleDelete(id)}
          >
            &times;
          </button>
          {isError && (
            <p className="error">Failed to delete blog: {error.message}</p>
          )}{" "}
          {/* Error handling */}
        </>
      )}

      <Link to={`/blogs/${id}`} className={styles.blogLink}>
        <img src={img} alt={title} />
        <p>{location}</p>
        <p>{formatDate(date)}</p>
        <h3>{title}</h3>
        <p>{`${description.slice(0, 100)}...`}</p>
      </Link>
    </li>
  );
}
