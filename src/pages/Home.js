import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPageComponent from "../components/HomePageComponents/LandingPageComponent";
import News from "../components/News";
import Newstitle from "../components/NewsTitle";
function Home() {
  return (
    <div>
      <Header />
       <LandingPageComponent /> 
      <Newstitle/>
      <News/>
      <Footer />
    </div>
  );
}

export default Home;