import styled from "styled-components";
import CountDown from "../components/CountDown";
import Details from "../components/Details";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Invitation />
      <CountDown />
      <Nav />
      <Details />
    </>
  );
}
