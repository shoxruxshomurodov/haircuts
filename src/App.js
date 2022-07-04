import Flex from "./components/flex/Flex";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import Title from "./components/title/Title";
import GlobalStyles from "./theme/GlobalStyles";

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
            <ul>
              <li>Regular haircut</li>
              <li>$29.95</li>
            </ul>
            <ul>Sadas</ul>
          </Flex>
        </Section>
        <GlobalStyles />
      </header>
    </div>
  );
}

export default App;
