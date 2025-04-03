"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { bannerBG2 } from "@/constants/image";
import CustomButton from "./CustomButton";

const Banner = () => {
  return (
    <motion.div
      className="relative mt-28 w-full px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Banner Container */}
      <motion.div
        className="relative flex rounded-2xl flex-col overflow-hidden px-12 py-6 shadow-lg"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-10"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={bannerBG2}
            className="w-full h-full object-cover rounded-2xl border"
            width={2500}
            priority
            height={2500}
            alt="NFTs"
          />
        </motion.div>

        {/* Banner Content */}
        <motion.div
          className="w-[73%] text-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-[2.2rem] font-bold leading-tight">
            Be part of the future—connect your wallet today!
          </div>

          <div className="my-5 text-base font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            explicabo, non eaque ratione similique maiores inventore itaque!
            Mollitia, doloribus omnis. Dolorum accusamus eligendi modi nam
            deleniti? Odio quae dolore, enim sunt illo quisquam vel?
          </div>

          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <CustomButton
              title={"Explore more"}
              containerStyles={"bg-white inline-flex"}
              textStyles={"text-[#e68002]"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
