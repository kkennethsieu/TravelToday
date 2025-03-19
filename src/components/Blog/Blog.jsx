import { Link } from "react-router-dom";
import { useBlog } from "../../context/BlogContext";
import styles from "./Blog.module.css";
import { useAuth } from "../../context/AuthContext";

function formateDate(dateString) {
  const date = new Date(dateString);

  const options = { month: "short", day: "numeric", year: "numeric" };

  return date.toLocaleDateString("en-US", options);
}

export default function Blog({ blog }) {
  const { isAuthenticated } = useAuth();
  const { deleteBlog } = useBlog();

  const { img, location, date, title, description, id } = blog;
  return (
    <li className={styles.blog}>
      {isAuthenticated && (
        <button className={styles.deleteBtn} onClick={() => deleteBlog(id)}>
          &times;
        </button>
      )}
      <Link to={`/blogs/${id}`} className={styles.blogLink}>
        <img src={img} />
        <p>{location}</p>
        <p>{formateDate(date)}</p>
        <h3>{title}</h3>
        <p>{`${description.slice(0, 100)}...`}</p>
      </Link>
    </li>
  );
}
