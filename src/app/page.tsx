"use client";

import PreLoader from "@/components/PreLoader";
import React, { useState } from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";


export default function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      {loading ? (
        <PreLoader onLoadingComplete={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <Intro />
          <Projects />
        </>
      )}
    </div>
  );
}
