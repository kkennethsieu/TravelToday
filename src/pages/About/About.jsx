import styles from "./About.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <div className="container">
      <NavBar />
      <section className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <img src="/iceland.jpeg" alt="Travel Blogger Profile" />
          <img src="/kyoto.jpg" alt="Travel Blogger Profile" />
          <img src="/banff.jpg" alt="Travel Blogger Profile" />
        </div>

        <div className={styles.aboutContent}>
          <h1>About Me</h1>
          <p>
            Hey there! I'm Ken, a travel blogger and adventure seeker who's
            always chasing the next destination. Over the past few years, I've
            wandered through bustling cities, hidden villages, and remote
            islands—documenting my experiences along the way. Whether it's
            sharing travel guides, cultural insights, or tips for solo
            travelers, I love inspiring others to explore the world.
          </p>

          <h2>Why I Travel</h2>
          <p>
            Traveling isn’t just a hobby for me—it’s a way of life. From sipping
            coffee in the streets of Paris to hiking mountains in Peru, every
            journey teaches me something new about the world and myself. My goal
            is to help others break out of their comfort zones and experience
            the magic that travel offers.
          </p>

          <h2>Where I've Been</h2>
          <ul className={styles.skillsList}>
            <li>Italy 🇮🇹 – Venice, Rome, and the Amalfi Coast</li>
            <li>Japan 🇯🇵 – Tokyo, Kyoto, and Nara</li>
            <li>Peru 🇵🇪 – Machu Picchu and the Sacred Valley</li>
            <li>Australia 🇦🇺 – Sydney and the Great Barrier Reef</li>
            <li>Morocco 🇲🇦 – Marrakech and the Sahara Desert</li>
          </ul>

          <h2>Let’s Connect!</h2>
          <p>
            Follow my adventures on Instagram, YouTube, and my travel blog. Have
            questions or want tips? Drop me a message—I'd love to chat!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
