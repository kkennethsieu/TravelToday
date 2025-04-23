import { useParams } from "react-router-dom";
import styles from "./ViewBlog.module.css";
import Spinner from "../Spinner/Spinner";
import BackButton from "../BackButton/BackButton";
import useBlogById from "./useBlogById";

function formateDate(dateString) {
  const date = new Date(dateString);

  const options = { month: "short", day: "numeric", year: "numeric" };

  return date.toLocaleDateString("en-US", options);
}

function ViewBlog() {
  const { id } = useParams();
  const { isLoading, blog: selectedTravel } = useBlogById(id);

  if (isLoading) return <Spinner />;

  const { title, location, date, description, img } = selectedTravel;

  return (
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
  );
}

export default ViewBlog;
