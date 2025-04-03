"use client";
import React from "react";
import { motion } from "framer-motion";
import YouTubeThumbnail from "./YouTubeThumbnail";
import { nft1, nft2, nft3 } from "@/constants/image";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Educate = () => {
  return (
    <motion.div
      className="relative overflow-hidden mt-28 w-full px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 relative items-center gap-y-24 gap-x-8 justify-center">
        {/* Hero Content */}
        <motion.div
          className="pr-[7rem]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-[2.25rem] w-full text-[#E68002] font-bold leading-tight">
            Learn with our premium video content
          </div>

          <div className="mt-6 text-base font-light leading-6.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dolorum sapiente dicta exercitationem, pariatur harum nam?
            Amet nemo iste quisquam eum fugit alias laudantium voluptatibus ab
            cupiditate, impedit eveniet deleniti illum repellendus nulla modi
            commodi unde vel maiores nisi?
          </div>
        </motion.div>

        {/* YouTube Thumbnail */}
        <motion.div
          className="w col-span-1"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <YouTubeThumbnail videoId={"bSDprg24pEA"} />
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={nft1}
              className="w-full h-full object-cover"
              width={2500}
              priority
              height={2500}
              alt="NFTs"
            />
          </motion.div>

          <div className="w-full grid grid-cols-1 gap-5">
            {[nft3, nft2].map((img, i) => (
              <motion.div
                key={i}
                className="w-full h-60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={img}
                  className="w-full h-full object-contain"
                  width={2500}
                  priority
                  height={2500}
                  alt="NFTs"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          className="px-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-[2.25rem] w-full text-[#E68002] font-bold leading-tight">
            Why choose us?
          </div>

          <div className="mt-4">
            {[
              { title: "Exclusive merchandise", desc: "High quality, unique designs." },
              { title: "Crypto payments", desc: "Seamless, and secure transactions." },
              { title: "Future-Ready NFTs", desc: "Mint and collect your digital assets." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <span className="font-bold text-lg capitalize">&#x2022; {item.title}: </span>
                {item.desc}
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <CustomButton title={"Read more"} textStyles={"font-light"} containerStyles={"inline-flex mt-6"} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Educate;
