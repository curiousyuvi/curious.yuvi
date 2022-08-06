import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const App: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"CURIOUS.YUVI"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="w-full min-h-screen flex justify-center">
        <Layout>
          <Home />
          <AboutMe />
          <Projects />
          <Education />
        </Layout>
      </main>

      <Footer />
    </div>
  );
};

export default App;
