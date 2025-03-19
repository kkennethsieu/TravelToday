import NavBar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import "../../index.css";
import Footer from "../../components/Footer/Footer";

function LoginPage() {
  return (
    <div className="container">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
}

export default LoginPage;
