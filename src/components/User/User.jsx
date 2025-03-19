import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }
  return (
    <div className={styles.user}>
      <img src={`${user.avatar}`} />
      <div className={styles.userHover} onClick={handleClick}>
        Signout
      </div>
    </div>
  );
}

export default User;
