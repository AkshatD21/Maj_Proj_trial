import React from 'react'
import Footer from '../components/Footer'
import Hero from "../components/Hero";
import ContactImg from "../assets/10.jpg"
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default Contact