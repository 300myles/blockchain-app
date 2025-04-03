"use client";
import Banner from "@/components/Banner";
import Educate from "@/components/Educate";
import Hero from "@/components/Hero";
import Testimonies from "@/components/Testimonies";
import Trending from "@/components/Trending";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Educate />
      <Testimonies />
      <Banner />
    </div>
  );
}
