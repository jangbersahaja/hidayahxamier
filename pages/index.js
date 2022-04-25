import Head from "next/head";

import CountDown from "../components/CountDown";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Intro from "../components/Intro";

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
        <meta
          property="og:site_name"
          content="Jemputan Ke Majlis Perkahwinan Anis & Hasrul"
        />
        <meta property="og:image" content="/default.png" />
      </Head>
    );
  };

  return (
    <>
      <MetaHeader
        metaTitle="Jemputan Ke Majlis Perkahwinan Anis & Hasrul"
        metaDesc="22 Mei 2022 | Ahad | 12:00 Tengahari"
        canonical={`https://anisxhasrul.vercel.app/`}
      />
      <Intro />
      <Hero />
      <CountDown />
      <Nav />
      <Details />
    </>
  );
}
