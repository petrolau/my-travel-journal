import "./App.css";
import japan from "./assets/images/japan.jpg";
import toronto from "./assets/images/toronto.jpg";
import italy from "./assets/images/italy.jpg";
import Navbar from "./components/Navbar/index";
import Card from "./components/Card/index";
import { StyledPage } from "./components/StyledPage/styled";

const mockedCountries = [
  {
    title: "J A P A N",
    location: "Tokyo",
    googleMapsUrl: "https://goo.gl/maps/JWVeTW3rNGJGAyQp8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands!",
    src: japan,
  },
  {
    title: "C A N A D A",
    location: "Toronto",
    googleMapsUrl: "https://goo.gl/maps/pTq2h4NDQSLNbJfY6",
    startDate: "10 Set, 2021",
    endDate: "24 Jan, 2022",
    description:
      "Toronto is Canada's largest city and a world leader in such areas as business, finance, technology, entertainment and culture. Its large population of immigrants from all over the globe has also made Toronto one of the most multicultural cities in the world.",
    src: toronto,
  },
  {
    title: "I T A L Y",
    location: "Milan",
    googleMapsUrl: "https://goo.gl/maps/McxFq6Ei1vn8Q1bB9",
    startDate: "7 Jun, 2022",
    endDate: "24 Oct, 2022",
    description:
      "Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea, Tyrrhenian Sea, Mediterranean Sea, and other waters.",
    src: italy,
  },
];

function App() {
  return (
    <StyledPage>
      <Navbar></Navbar>
      <Card data={mockedCountries}></Card>
    </StyledPage>
  );
}

export default App;
