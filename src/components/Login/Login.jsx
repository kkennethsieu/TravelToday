import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("michaeljackson@gmail.com");
  const [loginPassword, setLoginPassword] = useState("password123");

  function handleSubmit(e) {
    e.preventDefault();
    if (loginEmail && loginPassword) login(loginEmail, loginPassword);
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/blogs", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <section className={styles.loginContainer}>
      <h2>Login</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        {/* {error && <p className="error">{error}</p>} */}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginEmail}
          onChange={(e) => {
            setLoginEmail(e.target.value);
          }}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginPassword}
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
