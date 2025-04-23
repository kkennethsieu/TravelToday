import { NavLink, useSearchParams } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useAuth } from "../../context/AuthContext";

function PageNav() {
  const { isAuthenticated } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSort(value) {
    setSearchParams({ sort: value });
  }

  return (
    <div className={styles.pageNav}>
      <ul>
        <li>
          <button
            className={styles.pageNavBtn}
            onClick={() => handleSort("id_asc")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={styles.pageNavBtn}
            onClick={() => handleSort("date_asc")}
          >
            Ascending Date
          </button>
        </li>
        <li>
          <button
            className={styles.pageNavBtn}
            onClick={() => handleSort("date_desc")}
          >
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
