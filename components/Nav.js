import { useState } from "react";

import styled from "styled-components";

import Image from "next/image";

import { BsPinMapFill, BsTelephone } from "react-icons/bs";
import { SiWaze, SiGooglemaps } from "react-icons/si";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000;
  opacity: ${(props) => props.opacity};
  transition: all ease-in-out 300ms;

  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9dbaa1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  width: 100%;
  gap: 20px;

  position: fixed;
  bottom: 0;

  z-index: 2;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #9dbaa1, #69976b, #69976b, #9dbaa1);
  color: #fff;

  height: 50px;
  width: 50%;

  gap: 20px;

  cursor: pointer;
`;

const Drive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  gap: 20px;
  max-width: 600px;
  width: 90%;

  position: absolute;
  top: ${(props) => props.display};

  transition: all ease-in-out 300ms;
`;

const Application = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Map = styled.div`
  width: 100%;
  height: 200px;

  position: relative;
`;

const Address = styled.p`
  font-size: 16px;
  padding: 0 20px;

  text-align: center;
`;

const Venue = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <Wrapper>
        <Box>
          <BsTelephone />
          <Title> Hubungi</Title>
        </Box>
        <Box onClick={() => setOpen(!open)}>
          <BsPinMapFill />
          <Title>Lokasi</Title>
        </Box>
        <Drive display={open === false ? "400px" : "-400px"}>
          <Map>
            <Image
              src={require("/src/img/Screenshot 2022-04-22 at 20.20.08.png")}
              layout="fill"
              objectFit="cover"
              alt="Gambar Profil Reezal Merican"
            />
          </Map>
          <Venue>Zemi Garden Wedding</Venue>
          <Address>
            Lot 11909, Jalan Rasah, Taman Tuan Sheikh, 70300 Seremban, Negeri
            Sembilan
          </Address>
          <Application>
            <Box as="a" href="https://waze.com/ul/hw22rrehw7" target="_blank">
              <SiWaze />
              <Title> Waze</Title>
            </Box>
            <Box
              as="a"
              href="https://goo.gl/maps/xQZUqEbdHsVzsz8t8"
              target="_blank"
            >
              <SiGooglemaps />
              <Title> Google Map </Title>
            </Box>
          </Application>
        </Drive>
      </Wrapper>
      <Container opacity={open === false ? "0" : "0.4"} />
    </>
  );
};

export default Nav;
