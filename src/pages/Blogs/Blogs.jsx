import NavBar from "../../components/NavBar/NavBar";
import BlogList from "../../components/BlogList/BlogList";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function Blogs() {
  return (
    <div className="container">
      <NavBar />
      <BlogList />
      <Footer />
    </div>
  );
}

export default Blogs;
