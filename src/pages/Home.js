import Colors from "./Colors";
import HomeLinks from "../components/HomeLinks";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <HomeLinks />
      <Colors />
    </>
  );
}
