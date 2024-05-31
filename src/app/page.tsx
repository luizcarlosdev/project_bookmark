"use client";

import { Rubik } from "next/font/google";
import Image from "next/image";
import Header from "./components/header/Header";
import Section from "./components/section_intro/Section";
import Features from "./components/section_features/Features";
import Dowload from "./components/options_dowloads_card/Dowload";
import Questions from "./components/questions/Questions";

export default function Home() {
  return (
    <main>
      <Header />
      <Section />
      <Features />
      <Dowload />
      <Questions />
    </main>
  );
}
