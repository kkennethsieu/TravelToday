import { useState } from "react";
import { useAddBlog } from "./useAddBlog";
import { useNavigate } from "react-router-dom";
import styles from "./NewBlogForm.module.css";

function NewBlogForm() {
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useAddBlog();

  const [dateVisited, setDateVisited] = useState("");
  const [locationVisited, setLocationVisited] = useState("");
  const [titleVisited, setTitleVisited] = useState("");
  const [descriptionVisited, setDescriptionVisited] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [imgPreviewUrl, setImgPreviewUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !dateVisited ||
      !locationVisited ||
      !titleVisited ||
      !descriptionVisited ||
      !imgFile
    )
      return;

    const newBlog = {
      date: dateVisited,
      location: locationVisited,
      title: titleVisited,
      description: descriptionVisited,
    };

    mutate(
      { newBlog, imgFile },
      {
        onSuccess: () => {
          navigate("/blogs");
        },
      }
    );
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
          onChange={(e) => setDateVisited(e.target.value)}
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
          onChange={(e) => setLocationVisited(e.target.value)}
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
          onChange={(e) => setTitleVisited(e.target.value)}
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
          onChange={(e) => setDescriptionVisited(e.target.value)}
          className={styles.formTextArea}
        />
      </div>

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

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>

      {error && <p className="error-message">{error.message}</p>}
    </form>
  );
}

export default NewBlogForm;
