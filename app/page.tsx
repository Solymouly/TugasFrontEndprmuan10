"use client";
import React from "react";

// Components
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection"; 
import WorkSection from "../components/worksection";
import ServiceSection from "../components/servicesection";
import ContactSection from "../components/contactsection";

export default function Home() {
  return (
    <>
      {/* Navbar link "Home" (href="#home") akan mencari ID ini 
      */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Navbar link "About" (href="#about") akan mencari ID ini 
      */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Navbar link "Work" (href="#work") akan mencari ID ini 
      */}
      <section id="work" className="bg-dark text-white py-5">
        <WorkSection />
      </section>
      
      {/* Navbar link "Services" (href="#services") akan mencari ID ini 
      */}
      <section id="services">
        <ServiceSection />
      </section>

      {/* Navbar link "Contact" (href="#contact") akan mencari ID ini (sudah benar)
      */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}