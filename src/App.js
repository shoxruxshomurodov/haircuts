import Flex from "./components/flex/Flex";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import GlobalStyles from "./theme/GlobalStyles";
import ServicesHaircut from "./assets/images/services1.png";
import ServicesRazor from "./assets/images/services2.png";
import LandingPage from "./pages/LandingPage";
import "./assets/styles/index.css";
function App() {
  return (
    <div>
      <header>
        {/* <Navbar /> */}

        <LandingPage />
        <GlobalStyles />
      </header>
    </div>
  );
}

export default App;
