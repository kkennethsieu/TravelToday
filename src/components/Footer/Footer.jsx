import styles from "./Footer.module.css";

import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        <Link to="/blogs" onClick={scrollToTop}>
          <Logo className={styles.footerLogo} />
        </Link>
        <p>Exploring the world, one adventure at a time.</p>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <ul className={styles.links}>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blogs">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} TravelWise. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
