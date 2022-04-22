import CountDown from "../components/CountDown";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";
import Snowfall from "react-snowfall";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Snowfall
        color="#F2F5F3"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "1",
        }}
      />
      <Intro />
      <Hero />
      <CountDown />
      <Nav />
      <Details />
    </>
  );
}
