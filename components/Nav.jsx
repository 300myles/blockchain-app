"use client";
import { logo, walletImage } from "@/constants/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";

const navLinks = [
  {
    title: "home",
    route: "/"
  },
  {
    title: "shop",
    route: "/"
  },
  {
    title: "NFTs",
    route: "/"
  },
  {
    title: "about us",
    route: "/"
  },
  {
    title: "contact us",
    route: "/"
  },
]

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full px-16 py-4 flex flex-row items-center justify-between border-white">
        <div className="h-10 w-20 overflow-hidden ">
          <Image
            src={logo}
            onClick={() => router.push("/")}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="BlockChain"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row space-x-11 items-center justify-between capitalize whitespace-nowrap">
          {navLinks.map((link, i) => (

          <div key={i} onClick={() => router.push(link?.route)} className="capitalize navlink hover:cursor-pointer">
            {link?.title}
          </div>
          ))}

          <div className="flex flex-row items-center space-x-3">
            <div onClick={() => {}} className="hover:cursor-pointer p-1">
            <CiSearch size={20} />
            </div>

            <div onClick={() => {}} className="hover:cursor-pointer">
            <IoBasketOutline size={20} />
            </div>
          </div>

          <CustomButton 
            func={() => router.push("/login")} containerStyles={""} image={walletImage} title={"Connect wallet"} />
        </div>
      </div>
    </>
  );
};

export default Nav;
