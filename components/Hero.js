import Image from "next/image";
import styled from "styled-components";

import { Info } from "../details/info";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 50px);

  background-color: whitesmoke;

  z-index: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow: hidden;

  position: relative;
`;

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BGRotate = styled.div`
  width: 100%;
  height: 90%;

  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
position: absolute;
margin-left: 70px;
margin-bottom: 160px;

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

const Border = styled.div`
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

`;

const And = styled.p`
margin: -40px 0px 0px 180px;
font-size: 50px;
text-align: justify;
position: relative;
color: #F0D097;

`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #F0D097;
  margin-top: 20px;
`;

const InlineDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Month = styled.p`
  font-size: 18px;
  text-transform: uppercase;
`;

const Date = styled.h1`
  font-size: 50px;
  margin: 8px 15px;
  text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Day = styled.p`
  padding: 2px 10px;
  width: 70px;

  border-top: 1px solid;
  border-bottom: 1px solid;

  font-size: 12px;
  text-transform: uppercase;
  text-align: center;

  letter-spacing: 2px;
`;

const Time = styled.p`
  padding: 2px 10px;
  width: 70px;

  border-top: 1px solid;
  border-bottom: 1px solid;

  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
`;

const Year = styled.p`
  font-size: 20px;
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <BG>
          <Image
            src={require("/src/img/background.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </BG>
        <BGRotate>
          <Image
            src={require("/src/img/backgroundRotated.jpg")}
            layout="fill"
            objectFit="cover"
            alt="Floral Background"
          />
        </BGRotate>
        <TextWrapper>
          <Title>
            Jemputan
            <br />
            {Info.Title}
          </Title>
          <Border>
            <Anis>{Info.SN.Main}</Anis>
            <And>&</And>
            <Hasrul>{Info.SN.Partner}</Hasrul>
          </Border>
          <DateWrapper>
            <Month>{Info.Date.Month}</Month>
            <InlineDate>
              <Day>{Info.Date.Day}</Day>
              <Date>{Info.Date.Date}</Date>
              <Time>{Info.Date.Time}</Time>
            </InlineDate>
            <Year>{Info.Date.Year}</Year>
          </DateWrapper>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;
