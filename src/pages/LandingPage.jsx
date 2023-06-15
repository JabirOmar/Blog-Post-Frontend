import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import OurPosts from "./OurPosts";
import "../assets/landing-page.css";
import TopPosts from "./TopPosts";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <main>
      {/* <NavBar /> */}
      <HeroSection />
      <OurPosts />
      {/* <TopPosts /> */}
      <Footer />
    </main>
  );
};

export default LandingPage;
