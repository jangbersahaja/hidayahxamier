import Image from "next/image";
import styled from "styled-components";

import { Info } from "../details/info";

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
  top: 0;
  left: 0;

  opacity: 0.5;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  z-index: 1;
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
          src={require("/src/img/background2.jpg")}
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
          <Big>{Info.Parent.Main}</Big>
          <Text>- & -</Text>
          <Big>{Info.Parent.Partner}</Big>
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
          <Text>
            ke {Info.Title} {Info.Parent.Relation} kami
          </Text>
        </Detail>
        <Detail>
          <OurName>{Info.FN.Main}</OurName>
          <OurName>- & -</OurName>
          <OurName>{Info.FN.Partner}</OurName>
        </Detail>
        <Detail>
          <Text>
            Semoga dengan kehadiran dan doa restu para hadirin,
            <br />
            majlis ini akan bertambah seri dan diberkati Allah SWT.
            <br />
            Terima Kasih.
          </Text>
        </Detail>
        <Detail>
          <Big>
            {Info.Date.Date} {Info.Date.Month} {Info.Date.Year} |{" "}
            {Info.Date.Day} | {Info.Date.Time}
          </Big>
        </Detail>
        <Detail>
          <Text>
            <Big>{Info.Location.Venue}</Big>
            {Info.Location.Address1},
            <br />
            {Info.Location.Address2}.
          </Text>
        </Detail>
        <Detail>
          <Text>
            <Big>{Info.Extra.Title}</Big>
            {Info.Extra.Line1}
            <br />
            {Info.Extra.Line2}
          </Text>
        </Detail>
      </Wrapper>
    </Container>
  );
};

export default Details;
