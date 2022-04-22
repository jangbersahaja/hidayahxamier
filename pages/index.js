import styled from "styled-components";
import Details from "../components/Details";
import Invitation from "../components/Invitation";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Invitation />
      <Nav />
      <Details />
    </>
  );
}
