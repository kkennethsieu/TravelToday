import { useState } from "react";
import styles from "./ContactForm.module.css";
import { Link, useNavigate } from "react-router-dom";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!name || !email || !message) return;
    e.preventDefault();
    navigate("/blogs");
  }

  return (
    <div className={styles.contactMainContainer}>
      <Link to="/blogs/13" className={styles.imageContainer}>
        <img src="/cusco.jpeg" />
        <h3>Cusco, Peru →</h3>
      </Link>
      <section className={styles.contactContainer}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
