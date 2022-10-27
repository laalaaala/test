import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  const [mode, setMode] = useState(true);
  return (
    <div className={`page ${!mode && "light"} dark`}>
      <Head>
        <title>Isyanworld</title>
        <meta name="description" content="Infos zu isyanworld" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar setMode={setMode} mode={mode}  />
      <main className="main">
        <Intro />

      </main>
      <Footer />
      <Copyright />
    </div>
  );
}
