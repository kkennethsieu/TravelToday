import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/logo_1.png" alt="logo" />
      <h1>TravelWise</h1>
    </div>
  );
}

export default Logo;
