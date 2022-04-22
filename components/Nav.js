import { useState } from "react";

import styled from "styled-components";

import Image from "next/image";

import { BsPinMapFill, BsTelephone } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;

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

  background-color: blanchedalmond;

  height: 50px;
  width: 48%;

  gap: 20px;
`;

const Drive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  gap: 20px;
  max-width: 600px;
  width: 90%;

  position: absolute;
  top: -360px;

  display: ${(props) => props.display};
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
`;

const Venue = styled.p`
  font-size: 16px;
  font-weight: 500;
  padding: 0 20px;
`;

const Title = styled.p`
  font-size: 16px;
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <Wrapper>
      <Box>
        <BsTelephone />
        <Title> Hubungi</Title>
      </Box>
      <Box onClick={() => setOpen(!open)}>
        <BsPinMapFill />
        <Title>Lokasi</Title>
      </Box>
      <Drive display={open === false ? "none" : "flex"}>
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
            Waze
          </Box>
          <Box
            as="a"
            href="https://goo.gl/maps/xQZUqEbdHsVzsz8t8"
            target="_blank"
          >
            Google Map
          </Box>
        </Application>
      </Drive>
    </Wrapper>
  );
};

export default Nav;
