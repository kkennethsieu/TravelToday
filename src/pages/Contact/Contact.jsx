import ContactForm from "../../components/ContactForm/ContactForm";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

function Contact() {
  return (
    <div className="container">
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
