import Image from "next/image";
import styled from "styled-components";

import { Info } from "../details/info";

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

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  margin-left: 70px;
  margin-bottom: 240px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: justify;

  width: 100%;
  height: 100%;

  gap: 30px;
`;

const Title = styled.p`
  font-size: 18px;
  text-align: left;

  padding: 1px 5px;
  color: #F0D097;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: justify;
  align-items: justify;
`;

const Anis = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: justify;
  color: white;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
`;

const Hasrul = styled.h2`
  font-weight: 100;
  line-height: 0.8;
  font-family: "MonteCarlo", cursive;
  font-size: 70px;
  text-align: left;
  color: white;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  margin-top: -50px

`;

const And = styled.p`
  font-size: 50px;
  text-align: justify;
  position: relative;
  color: #F0D097;

`;

const DayTime = styled.p`
  font-size: 18px;
  padding: 2px 10px;

  text-transform: uppercase;

  letter-spacing: 1px;
  color: #F0D097;
`;

const Intro = () => {
  return (
    <Wrapper>
      <BG>
        <Image
          src={require("/src/img/background.jpg")}
          layout="fill"
          objectFit="cover"
          alt="Gambar Profil Reezal Merican"
        />
      </BG>
      <TextWrapper>
        <Title>
          Jemputan <br />
          {Info.Title}
        </Title>
        <Center>
          <Anis>{Info.SN.Main}</Anis>
          <And>&</And>
          <Hasrul>{Info.SN.Partner}</Hasrul>
        </Center>
        <DayTime>
          {Info.Date.Date} {Info.Date.Month} {Info.Date.Year}
        </DayTime>
      </TextWrapper>
    </Wrapper>
  );
};

export default Intro;
