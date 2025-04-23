import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/transparent_logo.png" alt="logo" />
      <h1>TravelToday</h1>
    </div>
  );
}

export default Logo;
