import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default Layout;
