import CountDown from "../components/CountDown";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <CountDown />
      <Nav />
      <Details />
    </>
  );
}
