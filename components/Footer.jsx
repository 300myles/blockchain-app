import React from 'react';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 mt-28 md:px-48 py-16 gap-x-12 gap-y-12'>
      
      {/* Logo */}
      <div className='text-[2.5rem] font-bold uppercase flex justify-center md:justify-start'>
        Logo
      </div>

      {/* About Sections */}
      <div className='flex col-span-2 justify-between w-full'>
        <div className='w-1/2'>
          <div className='capitalize text-lg font-bold'>About</div>
          <div className='mt-5 text-white/70 flex flex-col gap-4'>
            <div className='capitalize'>About NFT</div>
            <div className='capitalize'>Live Auctions</div>
            <div className='capitalize'>NFT Blog</div>
            <div className='capitalize'>Activity</div>
          </div>
        </div>

        <div className='w-1/2'>
          <div className='capitalize text-lg font-bold'>Support</div>
          <div className='mt-5 text-white/70 flex flex-col gap-4'>
            <div className='capitalize'>Help & Support</div>
            <div className='capitalize'>Item Details</div>
            <div className='capitalize'>Author Profile</div>
            <div className='capitalize'>Collection</div>
          </div>
        </div>
      </div>

      {/* Contact and Socials */}
      <div className='flex flex-col col-span-2 items-center md:items-start gap-6'>
        <p className='text-center md:text-left'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, aperiam voluptatibus ab officia quaerat illo neque?
        </p>

        {/* Social Icons */}
        <div className='flex justify-center md:justify-start space-x-5 text-[#e68002]'>
          <FaYoutube size={24} />
          <FaSquareXTwitter size={24} />
          <FaFacebookF size={24} />
          <TfiGoogle size={24} />
        </div>

        {/* Copyright */}
        <p className='text-center md:text-left'>
          All rights reserved &copy; @300Myles
        </p>
      </div>

    </div>
  );
}

export default Footer;
