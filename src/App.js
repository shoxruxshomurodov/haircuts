import GlobalStyles from "./theme/GlobalStyles";
import LandingPage from "./modules/pages/LandingPage";
import "./assets/styles/index.css";
import Layout from "./layout/Layout";
function App() {
  return (
    <>
      <Layout>
        <LandingPage />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
