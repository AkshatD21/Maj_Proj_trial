import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
    <Footer />
    </div>
  )
}

export default About