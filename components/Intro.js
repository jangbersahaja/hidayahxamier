import { useState } from "react";

import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  position: fixed;

  background-color: whitesmoke;

  transition: all ease-in 500ms;

  opacity: ${(props) => props.opacity};

  margin-top: ${(props) => props.margin};

  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 95%;
  max-width: 450px;

  border-radius: 10px;
  overflow: hidden;

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SideCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90%;
  width: 100%;
  max-width: 450px;

  border-radius: 10px;
  overflow: hidden;

  transform: scaleX(-1);

  position: relative;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;

  padding: 1px 5px;
`;

const Border = styled.div`
  width: 300px;
  height: 300px;

  margin: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border-top: 3px solid #ecc798;
  border-left: 3px solid #ecc798;
`;

const Anis = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: center;
  color: #827862;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Hasrul = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: center;
  color: #827862;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);

  margin-left: -30px;
`;

const And = styled.p`
  margin: 10px;
  font-size: 20px;
  text-align: center;
  position: relative;

  &::before {
    content: " ";
    height: 1px;
    width: 50px;
    background: black;
    display: block;
    position: absolute;
    top: 50%;
    left: 50px;
  }

  &::after {
    content: " ";
    height: 1px;
    width: 50px;
    background: black;
    display: block;
    position: absolute;
    top: 50%;
    right: 50px;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InlineDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Month = styled.p`
  font-size: 18px;
`;

const Date = styled.h1`
  font-size: 50px;
  margin: 8px 15px;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

const DayTime = styled.p`
  font-size: 20px;
  padding: 2px 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;

  letter-spacing: 1px;

  margin: 50px;
`;

const Open = styled.p`
  font-size: 16px;
  font-weight: 500;

  border: 1px solid;

  background: linear-gradient(90deg, #9dbaa1, #69976b, #69976b, #9dbaa1);
  color: #fff;

  padding: 10px 20px;

  margin: 50px 0;

  cursor: pointer;

  transition: all ease-in-out 300ms;

  &:hover {
    transform: scale(1.2);
  }
`;

const Intro = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      opacity={open === true ? "0" : "1"}
      margin={open === true ? "100vh" : "0"}
    >
      <Wrapper>
        <BG>
          <Image
            src={require("/src/img/3.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Gambar Profil Reezal Merican"
          />
        </BG>
        <TextWrapper>
          {open === true ? <audio src="/music.mp3" autoPlay></audio> : ""}
          <DayTime>22 Mei 2022</DayTime>
          <Anis>Anis</Anis>
          <And>Dan</And>
          <Hasrul>Hasrul</Hasrul>
          <Open onClick={() => setOpen(true)}>Buka Jemputan</Open>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default Intro;
