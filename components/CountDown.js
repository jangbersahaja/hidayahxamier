import styled from "styled-components";

import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;

  background-color: whitesmoke;
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 70px;

  color: #827862;
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
    const target = new Date("05/22/2022 12:00:00");

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
