import Flex from "./components/flex/Flex";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import Title from "./components/title/Title";
import GlobalStyles from "./theme/GlobalStyles";
import ServicesHaircut from "./assets/images/services1.png";
import ServicesRazor from "./assets/images/services2.png";
function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Section
          backgroundColor="#FCF7F8"
          heading={"Services"}
          description={
            "BarberShop specializes in classic cuts, beard trims, hot towel shaves, quality mens grooming products and more! "
          }
        >
          <Flex justify="space-between">
            <div>
              <img src={ServicesHaircut} />
              <Flex justify="space-between">
                <ul className="services-list">
                  <li className="services-list-item">
                    <span>Regular haircut</span>
                    <span>$29.95</span>
                  </li>
                </ul>
              </Flex>
            </div>
            <div>
              <img src={ServicesHaircut} />
            </div>
          </Flex>
          <Flex justify="space-between"></Flex>
        </Section>
        <GlobalStyles />
      </header>
    </div>
  );
}

export default App;
