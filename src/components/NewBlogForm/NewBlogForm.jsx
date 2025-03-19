import { useState } from "react";
import styles from "./NewBlogForm.module.css";
import { useBlog } from "../../context/BlogContext";
import { useNavigate } from "react-router-dom";

function NewBlogForm() {
  const navigate = useNavigate();
  const { addNewBlog } = useBlog();

  const [dateVisited, setDateVisited] = useState("");
  const [locationVisited, setLocationVisited] = useState("");
  const [titleVisited, setTitleVisited] = useState("");
  const [descriptionVisited, setDescriptionVisited] = useState("");
  // const [ratingVisited, setRatingVisited] = useState("");
  const [imgFile, setImgFile] = useState(null);
  // ^ This scan be saved into the backend to upload again//

  const [imgPreviewUrl, setImgPreviewUrl] = useState("");
  console.log(imgPreviewUrl);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !dateVisited ||
      !locationVisited ||
      !titleVisited ||
      !descriptionVisited ||
      !imgPreviewUrl
    )
      return;
    const newBlog = {
      id: crypto.randomUUID(),
      date: dateVisited,
      location: locationVisited,
      title: titleVisited,
      description: descriptionVisited,
      img: imgPreviewUrl,
    };
    addNewBlog(newBlog);
    navigate("/blogs");
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (imgPreviewUrl) {
      URL.revokeObjectURL(imgPreviewUrl);
    }

    const previewUrl = URL.createObjectURL(file);

    setImgFile(file);
    setImgPreviewUrl(previewUrl);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.blogForm}>
      <div className={styles.formGroup}>
        <label htmlFor="dateVisited" className={styles.formLabel}>
          Date Visited:
        </label>
        <input
          type="date"
          name="dateVisited"
          value={dateVisited}
          onChange={(e) => {
            setDateVisited(e.target.value);
          }}
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="location" className={styles.formLabel}>
          Location:
        </label>
        <input
          type="text"
          name="location"
          value={locationVisited}
          placeholder="City, Country"
          onChange={(e) => {
            setLocationVisited(e.target.value);
          }}
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.formLabel}>
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={titleVisited}
          placeholder="Title"
          onChange={(e) => {
            setTitleVisited(e.target.value);
          }}
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.formLabel}>
          Description:
        </label>
        <textarea
          name="description"
          value={descriptionVisited}
          placeholder="Description"
          onChange={(e) => {
            setDescriptionVisited(e.target.value);
          }}
          className={styles.formTextArea}
        />
      </div>

      {/* <div className={styles.formGroup}>
        <label htmlFor="rating" className={styles.formLabel}>
          Rating:
        </label>
        <input
          type="number"
          name="rating"
          value={ratingVisited}
          onChange={(e) => {
            setRatingVisited(e.target.value);
          }}
          min="1"
          max="5"
          className={styles.formInput}
        />
      </div> */}

      <div className={styles.formGroup}>
        <label htmlFor="image" className={styles.formLabel}>
          Image Upload:
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.formInput}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}

export default NewBlogForm;
