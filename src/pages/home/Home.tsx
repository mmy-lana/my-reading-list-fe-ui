import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import CardCollection from "../../components/card/CardCollection/CardCollection";
import { newTitlesData, lastReadData, topTenData } from "./mockDataBase64";
import Footer from "../../components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="items-center justify-center h-full">
        <Hero />
      </div>
      <CardCollection
        lastReadData={lastReadData}
        newTitlesData={newTitlesData}
        topTenData={topTenData}
      />
      <Footer />
    </div>
  );
};

export default Home;
