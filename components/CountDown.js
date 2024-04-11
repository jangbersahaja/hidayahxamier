import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Info } from "../details/info";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 440px;

  background: linear-gradient(90deg, #A65B76, #933B57, #933B57, #A65B76);

  @media (min-width: 768px) {
    height: 650px;
  }

  z-index: -1;
  position: relative;
`;

const BG = styled.div`
width: 100%;
height: 100%;

position: absolute;
top: 0;
left: 0;
  
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;

`;

const Title = styled.p`
  font-size: 18px;
  text-align: center;

  padding: 1px 5px;
`;

const TimerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;

const TimerSegment = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  font-weight: 500;
  font-size: 40px;

  color: #827862;

  @media (min-width: 768px) {
    font-size: 70px;
  }
`;

const Label = styled.span`
  font-size: 16px;
`;

const Divider = styled.span`
  font-size: 40px;
`;

const CountDown = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(Info.Date.Counting);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
    <BG>
    <Image
      src={require("/src/img/backgroundCounting.jpg")}
       layout='fill'
       objectFit="cover"
      alt="Floral Background"
    />
  </BG>
      <TimerWrapper>
        <Title>Counting Days</Title>
        <TimerInner>
          <TimerSegment>
            <Time>{days}</Time>
            <Label>Hari</Label>
          </TimerSegment>
          <Divider>:</Divider>
          <TimerSegment>
            <Time>{hours}</Time>
            <Label>Jam</Label>
          </TimerSegment>
          <Divider>:</Divider>
          <TimerSegment>
            <Time>{minutes}</Time>
            <Label>Minit</Label>
          </TimerSegment>
          <Divider>:</Divider>
          <TimerSegment>
            <Time>{seconds}</Time>
            <Label>Saat</Label>
          </TimerSegment>
        </TimerInner>
      </TimerWrapper>
    </Container>
  );
};

export default CountDown;
