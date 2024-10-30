"use client"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";
import Carts from "@/components/Carts";
import Feed from "@/components/Feed";
import Price from "@/components/Price";
import Heros from "@/components/Heros";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[])

  
  return (
    <main className=" bg-hamzabg3-100">
      <Navbar />
      <Header />
      <Header2 />
      <Carts />
      <Feed />
      <Price />
      <Heros />
      <Social />
      <Footer />
    </main>
  );
}
