import "./styles.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/About/About";
import Projects from "./components/projects/projects";
import Contacts from "./components/contacts/contact";
import useLocalStorage from "use-local-storage";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Footer from "./components/footer/footer";

export default function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <Header theme={theme} handleThemeChange={switchTheme} />
      <Banner />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
