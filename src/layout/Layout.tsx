import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";
import ContactPage from "../pages/ContactPage";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default Layout;
