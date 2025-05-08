import Image from "next/image";
import HeroSection from "./components/Hero";
import Header from "./components/Header";
import AboutSection from "./components/About";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <HeroSection/>
      <AboutSection/>
     
    </div>
  );
}
