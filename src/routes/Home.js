import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
// import "../components/HeroStyles.css";

const Home = () => {
  return (
    <div>
          <Navbar />
          <Hero 
          cName = "hero"
          heroImg= "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib-rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&9-80"
          title=" Your Journey Your Story"
          text = "Choose Your Favourite Destination."
          url = "/"
          buttonText = "Travel your plan"
          btnClass = "show"
        />
        <Destination />
        <Trip />
        <Footer />
    </div>
    
  )
}

export default Home