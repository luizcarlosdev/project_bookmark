"use client";

import { useState } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import Header from "./components/header/Header";
import Section from "./components/section_intro/Section";
import Features from "./components/section_features/Features";
import Dowload from "./components/options_dowloads_card/Dowload";
import Questions from "./components/questions/Questions";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav_menu/Nav";

export default function Home() {
  const [showNav, setShowNav] = useState<boolean>(false)
  return (
    <main style={{ overflowX: "hidden" }}>
      <Nav visibility={showNav} event={() => setShowNav(false)} />
      <Header event={() => setShowNav(true)} />
      <Section />
      <Features />
      <Dowload />
      <Questions />
      <Footer />
    </main>
  );
}
