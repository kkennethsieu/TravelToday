import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ViewBlog from "../../components/ViewBlog/ViewBlog";

function BlogPost() {
  return (
    <div className="container">
      <NavBar />
      <ViewBlog />
      <Footer />
    </div>
  );
}

export default BlogPost;
