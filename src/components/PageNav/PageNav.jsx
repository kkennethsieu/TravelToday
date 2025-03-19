import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useAuth } from "../../context/AuthContext";
import { useBlog } from "../../context/BlogContext";

function PageNav() {
  const { isAuthenticated } = useAuth();
  const { sortBlogsAsc, sortBlogsDesc, sortBlogsByIdAsc } = useBlog();
  return (
    <div className={styles.pageNav}>
      <ul>
        <li>
          <button className={styles.pageNavBtn} onClick={sortBlogsByIdAsc}>
            All
          </button>
        </li>
        <li>
          <button className={styles.pageNavBtn} onClick={sortBlogsAsc}>
            Ascending Date
          </button>
        </li>
        <li>
          <button className={styles.pageNavBtn} onClick={sortBlogsDesc}>
            Descending Date
          </button>
        </li>
        {isAuthenticated && (
          <li>
            <NavLink to="/create">Create New +</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PageNav;
