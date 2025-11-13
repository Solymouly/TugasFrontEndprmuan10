"use client";
import React from "react";

import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection"; 
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="work" className="bg-dark text-white py-5">
        <WorkSection />
      </section>

      <section id="services">
        <ServiceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}