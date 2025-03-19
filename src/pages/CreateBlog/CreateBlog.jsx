import NavBar from "../../components/NavBar/NavBar";
import NewBlogForm from "../../components/NewBlogForm/NewBlogForm";
import Footer from "../../components/Footer/Footer";
import PageNav from "../../components/PageNav/PageNav";
function CreateBlog() {
  return (
    <div className="container">
      <NavBar />
      <NewBlogForm />
      <Footer />
    </div>
  );
}

export default CreateBlog;
