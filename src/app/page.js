"use client";


import Hero from  "@/app/components/Hero/Hero.jsx"    
import LogoSlider from "./components/LogoSlider/LogoSlider";

const Home = () => {
  

  return (
    <>
      <main className="bg-red text-white min-h-[70vh] pt-2 text-center">
        <Hero />
        <LogoSlider/>
       
      </main>
    </>
  );
};

export default Home;
