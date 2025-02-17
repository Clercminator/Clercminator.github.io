"use client";

import { navItems } from "@/data";

import { FloatingNav } from "../sections/FloatingNavbar";
import HeroSection from "../sections/Hero";
import Grid from "../sections/Grid";
import ProjectsSection from "../sections/Projects";
import { TapeSection } from "../sections/Tape";
import Experience from "../sections/Experience";
import Approach from "../sections/Approach";
import { QuotesMoving } from "../sections/Quotes";
import Clients from "../sections/Testimonials";
import { CompareMyself } from "../sections/Myself";
import { AboutSection } from "../sections/About";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <Grid />
        <ProjectsSection />
        <Experience />
        <Approach />
        <QuotesMoving />
        <TapeSection />
        {/* <Clients /> */}
        <AboutSection />
        <CompareMyself />
        <Footer />
      </div>
    </main>
  );
}
