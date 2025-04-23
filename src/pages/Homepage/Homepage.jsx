import styles from "./Homepage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import "../../index.css";
function Homepage() {
  return (
    <>
      <div className={styles.homepage}>
        <NavBar />
        <main className={styles.main}>
          <h1>You travel the world</h1>
          <h2>TravelToday helps you travel wise</h2>
          <p>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful <br /> experiences, and show your
            friends how you have wandered the world.
          </p>

          <div className={styles.secondContainer}>
            <ul>
              <li>
                <NavLink to="/blogs">
                  <img src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg" />
                  <h3>MOST RECENT →</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">
                  <img src="https://static.independent.co.uk/2024/09/26/15/iStock-1463288473-1.jpg" />
                  <h3>MOST POPULAR →</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs">
                  <img src="https://www.hotelpuertamerica.com/uploads/9/8/2/4/98249186/adobestock-103181516_1_orig.jpg" />
                  <h3> ALL BLOGS →</h3>
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <NavLink to="/blogs" className={styles.btn}>
            All Blogs
          </NavLink> */}
        </main>
      </div>
    </>
  );
}

export default Homepage;
