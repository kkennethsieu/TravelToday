import styles from "./BackButton.module.css";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className={styles.backBtn}
      type={"back"}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </button>
  );
}

export default BackButton;
