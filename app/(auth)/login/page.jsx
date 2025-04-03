"use client";
import { nft1, nft2, nft4 } from "@/constants/image";
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import FormField from "@/components/FormField";
import { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";

const nftImages = [nft2, nft4];

const login = () => {
  const [form, setForm] = useState({
    userName: "",
    pwd: "",
  });
  const [visible, setVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic Slideshow Every 10 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nftImages.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div
      className="bg-white py-8 px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#160E21]">
        {/* Large NFT Image */}
        <motion.div
          className="hidden md:block w-full h-full items-center justify-center overflow-hidden"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Sliding Images Wrapper */}
          <motion.div
            key={currentImageIndex}
            className="w-full h-full"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={nftImages[currentImageIndex]}
              className="w-full h-full object-cover"
              width={1000}
              priority
              height={1000}
              alt="NFTs"
            />
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="flex flex-col gap-5 justify-center px-16 h-[100%]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="text-[3rem] font-bold capitalize"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Login
          </motion.div>

          <motion.div
            className="text-lg w-[70%]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Lorem ipsum dolor sit adipisicing elit. Voluptatem voluptate nisi
            inventore iusto.
          </motion.div>

          {/* Form Fields */}
          <motion.div
            className="w-[65%] flex flex-col mt-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <FormField
                title={"Username"}
                type={"text"}
                value={form?.userName}
                Icon={AiOutlineUser}
                iconSize={24}
                iconStyles={"text-[#BDBDBD]"}
                handleChange={(e) =>
                  setForm((prev) => ({ ...prev, userName: e.target.value }))
                }
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <FormField
                title={"Password"}
                type={visible ? "text" : "password"}
                value={form?.pwd}
                Icon={CiLock}
                visible={visible}
                setVisible={setVisible}
                PwdEye={visible ? FaRegEye : FaRegEyeSlash}
                iconSize={24}
                iconStyles={"text-[#BDBDBD]"}
                containerStyles={"mt-5"}
                handleChange={(e) =>
                  setForm((prev) => ({ ...prev, pwd: e.target.value }))
                }
              />
            </motion.div>

            {/* Animated Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <CustomButton
                title={"Login"}
                containerStyles={"mt-9"}
                textStyles={""}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default login;
