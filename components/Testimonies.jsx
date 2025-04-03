"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  commas,
  commasWhite,
  pointer,
  pointerWhite,
  user1,
  user2,
  user3,
} from "@/constants/image";

const testimonials = [
  {
    userImage: user1,
    userName: "cryptobaddie",
    comment:
      "When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.",
  },
  {
    userImage: user2,
    userName: "king sul",
    comment:
      "When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.",
  },
  {
    userImage: user3,
    userName: "crypto knight",
    comment:
      "When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help—I will be recommending you to everyone.",
  },
];

const Testimonies = () => {
  function isEven(number) {
    return number % 2 === 0;
  }

  return (
    <motion.div
      className="relative overflow-hidden mt-28 w-full px-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-xl font-light">Testimonials</div>
        <div className="text-[2.25rem] mt-4 text-[#E68002] font-bold leading-tight">
          What our clients say
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-7 gap-8">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Testimonial Card */}
            <motion.div
              className={`p-10 flex relative flex-col items-center justify-center rounded-xl shadow-lg transition-transform duration-300 ${
                isEven(i + 1) ? "bg-[#e68002] text-white" : "bg-white text-[#E68002]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Quotation Mark Icon */}
              <div className="w-6 h-6">
                <Image
                  src={isEven(i + 1) ? commasWhite : commas}
                  className="w-full h-full object-contain"
                  width={2500}
                  priority
                  height={2500}
                  alt="Quotation"
                />
              </div>

              {/* Testimonial Text */}
              <div className="mt-5 text-center">{item.comment}</div>
            </motion.div>

            {/* Pointer Icon */}
            <div className="w-6 -mt-1.5 self-center">
              <Image
                src={isEven(i + 1) ? pointer : pointerWhite}
                className="w-full h-full object-contain"
                width={2500}
                priority
                height={2500}
                alt="Pointer"
              />
            </div>

            {/* User Info */}
            <motion.div
              className="flex flex-col items-center mt-5"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16">
                <Image
                  src={item.userImage}
                  className="w-full h-full object-cover rounded-full border-2 border-[#e68002]"
                  width={2500}
                  priority
                  height={2500}
                  alt="User"
                />
              </div>

              <div className="text-lg mt-2 capitalize font-extrabold text-[#e68002]">
                {item.userName}
              </div>
              <div className="text-base capitalize font-light">Customer</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonies;
