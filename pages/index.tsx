import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"CURIOUS.YUVI"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="w-screen h-screen overflow-y-auto"></main>

      <Footer />
    </div>
  );
};

export default Home;
