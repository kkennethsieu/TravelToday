import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import { useAuth } from "../../context/AuthContext";
import User from "../User/User";

function NavBar() {
  const { isAuthenticated } = useAuth();
  return (
    <header className={styles.navBar}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            📖 Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            📞 Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          {!isAuthenticated ? (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          ) : (
            <User />
          )}
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
