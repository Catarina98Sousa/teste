/* Css */
import "./styles.css";
/* parts */
import Header from "./components/1-header/Header";
import Banner from "./components/2-banner/Banner";
import AboutSkill from "./components/3-About-bg/About-skill";
import Projects from "./components/5-projects/projects";
import Contacts from "./components/6-contacts/contact";
import Footer from "./components/7-footer/footer";
/* Imports */
import useLocalStorage from "use-local-storage";
import "bootstrap/dist/css/bootstrap-grid.min.css";


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
      <AboutSkill />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
