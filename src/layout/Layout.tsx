import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectPage from "../pages/ProjectPage";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <Footer />
    </div>
  );
}

export default Layout;
