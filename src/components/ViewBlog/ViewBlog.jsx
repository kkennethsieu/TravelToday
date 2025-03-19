import { useParams } from "react-router-dom";
import styles from "./ViewBlog.module.css";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";
function formateDate(dateString) {
  const date = new Date(dateString);

  const options = { month: "short", day: "numeric", year: "numeric" };

  return date.toLocaleDateString("en-US", options);
}

const BASE_URL = "http://localhost:9000/";

function ViewBlog() {
  const data = useParams();
  const id = data.id;

  const [isLoading, setIsLoading] = useState(false);

  const [selectedTravel, setSelectedTravel] = useState([]);

  const { title, location, date, description, img } = selectedTravel;

  useEffect(() => {
    async function fetchBlog() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}blogs/${id}`);
        if (!res.ok) throw new Error("Error fetching data");
        const data = await res.json();
        setSelectedTravel(data);
      } catch {
        throw new Error("Error fetchind data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.viewBlogContainer}>
          <BackButton />
          <img src={img} />
          <div className={styles.viewBlogDetails}>
            <h3>{title}</h3>
            <h3>{location}</h3>
            <h4>{formateDate(date)}</h4>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewBlog;
