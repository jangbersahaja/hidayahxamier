import Head from "next/head";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

import CountDown from "../components/CountDown";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Nav from "../components/Nav";

import Snowfall from "react-snowfall";
import { Info } from "../details/info";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  
`;

const Front = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background: linear-gradient(90deg, #A65B76, #933B57, #933B57, #A65B76);

  transform: scale(${(props) => props.scale});
  opacity: ${(props) => props.opacity};

  background-color: whitesmoke;

  transition: all ease-in 500ms;

  z-index: ${(props) => props.index};
`;

const Back = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;

  width: 100%;

  transition: all ease-in 500ms;

  transform: scale(${(props) => props.display});
  z-index: 0;
`;

const Bottom = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const bouncing = keyframes`
0%   { transform: scale(1,1)    translateY(0); }
10%  { transform: scale(1.1,.9) translateY(0); }
30%  { transform: scale(.9,1.1) translateY(-20px); }
50%  { transform: scale(1,1)    translateY(0); }
57%  { transform: scale(1,1)    translateY(-7px); }
64%  { transform: scale(1,1)    translateY(0); }
100% { transform: scale(1,1)    translateY(0); }
`;

const Open = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #fff;

  padding: 10px 20px;
  width: 200px;

  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: bottom;
  animation-name: ${bouncing};
  animation-timing-function: ease;

  border-radius: 10px;
  background: linear-gradient(90deg, #A65B76, #933B57, #933B57, #A65B76);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  cursor: pointer;

  transition: all ease-in-out 300ms;

  position: fixed;
  top: 80%;

  &:hover {
    animation-name: none;
    transform: scale(1.1);
  }
`;

export default function Home() {
  const MetaHeader = ({ metaTitle, metaDesc, canonical }) => {
    return (
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />

        <link rel="canonical" href={canonical} />
        <meta property="og:locale" content="ms_MY" />
        <meta property="og:type" content="page" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={metaTitle} />
        <meta property="og:image" content="/default.png" />
      </Head>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <MetaHeader
        metaTitle={`Jemputan Ke ${Info.Title} ${Info.SN.Main} & ${Info.SN.Partner}`}
        metaDesc={`${Info.Date.Date} ${Info.Date.Month} ${Info.Date.Year} | ${Info.Date.Day} | ${Info.Date.Time}`}
        canonical={`https://${Info.SN.Main}x${Info.SN.Partner}.vercel.app/`}
      />
      <Wrapper>
        <Front
          opacity={open === true ? "0" : "1"}
          scale={open === true ? "1.3" : "1"}
          index={open === true ? "-1" : "0"}
        >
          <Intro />
          <Open onClick={() => setOpen(true)}>Buka Jemputan</Open>
        </Front>
        <Back display={open === true ? "flex" : "none"}>
          {open === true ? (
            <>
              <audio src="/bgm.mp3" autoPlay></audio>
              <Snowfall
                color="#F2F5F3"
                style={{
                  position: "fixed",
                  width: "100vw",
                  height: "100vh",
                  zIndex: "1",
                }}
              />
            </>
          ) : (
            ""
          )}
          <Hero />
          <CountDown />
          <Details />
        </Back>
        <Bottom display={open === true ? "flex" : "none"}>
          <Nav />
        </Bottom>
      </Wrapper>
    </>
  );
}
