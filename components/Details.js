import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;

  background-color: whitesmoke;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
  padding: 100px 10px;
`;

const BG = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;

  opacity: 0.2;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const Salam = styled.div`
  width: 300px;
  height: 105px;

  position: relative;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Big = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

const OurName = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

const Disclosure = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 600px;

  margin: 30px 0;

  border-radius: 10px;
  border: 1px solid;
  overflow: hidden;
`;

const DisBot = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 20px;

  background-color: whitesmoke;
`;

const DisTitle = styled.h1`
  background-color: #000;
  font-size: 20px;

  text-align: center;

  color: #fff;

  padding: 10px 20px;
`;

const DisText = styled.p`
  font-size: 16px;
`;

const DisList = styled.ol`
  font-size: 16px;
`;
const DisListItem = styled.li`
  font-size: 16px;
`;

const DisListUndeline = styled.u`
  font-size: 16px;
`;

const Details = () => {
  return (
    <Container>
      <BG>
        <Image
          src={require("/src/img/1570846.jpg")}
          layout="fill"
          objectFit="cover"
          alt="Floral Background"
        />
      </BG>
      <Wrapper>
        <Salam>
          <Image
            src={require("/src/img/bismillah.png")}
            layout="fill"
            objectFit="cover"
            alt="Basmallah"
          />
        </Salam>
        <Detail>
          <Big>Norazizan Bin Aziz</Big>
          <Text>- & -</Text>
          <Big>Zarina Binti Abd Halim</Big>
        </Detail>
        <Detail>
          <Text>
            Dengan penuh kesyukuran dan hormatnya
            <br />
            Kami mengalu-alukan kehadiran
          </Text>
        </Detail>
        <Detail>
          <Text>
            YB / YBhg Tan Sri / Puan Sri / Dato’ Sri / Datin Sri / Dato’ / Datin
            / Tuan / Puan / Encik / Cik
          </Text>
        </Detail>
        <Detail>
          <Text>Ke Majlis Perkahwinan Puteri Kami</Text>
        </Detail>
        <Detail>
          <OurName> Nur Anis Diana Binti Norazizan</OurName>
          <OurName>- & -</OurName>
          <OurName> Hasrul Fahmizan Bin Hashim</OurName>
        </Detail>
        <Detail>
          <Text>
            Semoga dengan kehadiran dan doa restu para hadirin,
            <br /> Majlis ini akan bertambah seri dan diberkati Allah SWT.
            <br /> Terima Kasih
          </Text>
        </Detail>
        <Detail>
          <Big>22 Mei 2022 | Ahad | 12 Tengahari</Big>
        </Detail>
        <Detail>
          <Text>
            <Big>Zemi Garden Wedding </Big>
            Lot 11909, Jalan Rasah, Taman Tuan Sheikh,
            <br />
            70300 Seremban, Negeri Sembilan
          </Text>
        </Detail>
        <Detail>
          <Text>
            <Big>Atucara Majlis </Big>
            Jamuan Makan : 12:00 Tengahri - 3:00 Petang <br />
            Ketibaan Pengantin : 12:30 Petang
          </Text>
        </Detail>
        <Disclosure>
          <DisTitle>Peringatan</DisTitle>
          <DisBot>
            <DisText>
              Majlis ini terhad kepada individu yang telah
              <DisListUndeline>
                {" "}
                mendapat vaksin yang lengkap dan matang.
              </DisListUndeline>{" "}
              Mohon para tetamu untuk sentiasa mematuhi SOP norma baharu.
            </DisText>
            <DisList>
              <DisListItem>Peka terhadap penjarakan fizikal.</DisListItem>
              <DisListItem>Sentiasa memakai pelitup muka.</DisListItem>
              <DisListItem>Menggunakan hand-sanitizer</DisListItem>
            </DisList>
          </DisBot>
        </Disclosure>
      </Wrapper>
    </Container>
  );
};

export default Details;
