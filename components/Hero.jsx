"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  bannerBG,
  collection,
  heroImage,
  merch,
  saleRank,
  seperator,
  starDesign,
  wallet,
} from "@/constants/image";
import CustomButton from "./CustomButton";

const workFlow = [
  { title: "Set up your wallet", icon: wallet },
  { title: "Create your collection", icon: collection },
  { title: "Add your merch", icon: merch },
  { title: "List them for sale", icon: saleRank },
];

const workFlowVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 },
  }),
};

const Hero = () => {
  return (
    <motion.div
      className="relative overflow-hidden mt-16 w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
      }}
    >
      <div className="flex flex-row relative items-center justify-center">
        {/* Hero Content with Soft Motion Effects */}
        <motion.div
          className="w-[46vw] pl-[6rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="text-[3.6rem] w-full font-extrabold leading-16">
            Unleash Creativity with Our Exclusive Products and NFTs
          </div>

          <div className="mt-6 text-md font-light leading-6.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            ratione dolorum sapiente dicta exercitationem, pariatur harum nam?
            Amet nemo iste quisquam eum fugit alias laudantium voluptatibus ab
            cupiditate, impedit eveniet deleniti illum repellendus nulla modi
            commodi unde vel maiores nisi?
          </div>

          <div className="w-4/5 mt-6 flex flex-row items-center space-x-6">
            <CustomButton
              title={"Explore Products"}
              containerStyles={"px-7 py-3"}
              textStyles={"text-md"}
            />
            <CustomButton
              title={"Start Minting NFTs"}
              containerStyles={"bg-white px-7 py-3"}
              textStyles={"text-[#E68002] text-md"}
            />
          </div>
        </motion.div>

        {/* Hero Image with Smooth Slide-in Animation */}
        <motion.div
          className="w-[54vw] h-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            className="w-full h-full object-contain"
            width={2500}
            priority
            height={2500}
            alt="NFTs"
          />
        </motion.div>

        {/* Background Design */}
        <motion.div
          className="w-full absolute -z-10 mt-[29%] -bottom-[100%] inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <Image
            src={starDesign}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="BlockChain"
          />
        </motion.div>
      </div>

      {/* How It Works Section with Staggered Animation */}
      <motion.div
        className="w-full flex mt-68 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="py-12">
          <div className="text-3xl tracking-widest text-center font-medium">
            How it works
          </div>

          <div className="flex flex-row items-center mt-12 space-x-3 relative">
            {workFlow.map((item, i) => (
              <React.Fragment key={i}>
                {/* Item with Slide-Up Animation */}
                <motion.div
                  className="flex flex-col items-center justify-center relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={workFlowVariants}
                >
                  {/* Icon */}
                  <div className="w-20 h-20 p-5 flex items-center backdrop-blur-3xl bg-[#ffffff12] justify-center rounded-full overflow-hidden">
                    <Image
                      src={item.icon}
                      className="w-full h-full object-contain"
                      width={1000}
                      height={1000}
                      alt={item?.title}
                    />
                  </div>

                  {/* Title */}
                  <div className="mt-5 font-stretch-semi-expanded tracking-wider capitalize font-light text-lg text-center">
                    {item?.title}
                  </div>
                </motion.div>

                {/* Separator with Fading Effect */}
                {i !== workFlow.length - 1 && (
                  <motion.div
                    className="w-20 h-16 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: (i + 1) * 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={seperator}
                      className="w-full h-full object-contain"
                      width={1000}
                      height={1000}
                      alt="separator"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   bannerBG,
//   collection,
//   heroImage,
//   merch,
//   saleRank,
//   seperator,
//   starDesign,
//   wallet,
// } from "@/constants/image";
// import CustomButton from "./CustomButton";

// const workFlow = [
//   {
//     title: "Set up your wallet",
//     icon: wallet,
//   },
//   {
//     title: "Create your collection",
//     icon: collection,
//   },
//   {
//     title: "add your merch",
//     icon: merch,
//   },
//   {
//     title: "list them for sale",
//     icon: saleRank,
//   },
// ];

// const Hero = () => {
//   return (
//     <motion.div
//       className="relative overflow-hidden mt-16 w-full "
//       initial="hidden"
//       animate="visible"
//       variants={{
//         hidden: { opacity: 0 },
//         visible: { opacity: 1, transition: { duration: 1 } },
//       }}
//     >
//       <div className="flex flex-row relative items-center justify-center">
//         {/* Hero Content with Soft Motion Effects */}
//         <div className="w-[46vw] pl-[6rem]">
//           <div className="text-[3.6rem] w-full font-extrabold leading-16">
//             Unleash Creativity with Our Exclusive Products and NFTs
//           </div>

//           <div className="mt-6 text-md font-light leading-6.5">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
//             ratione dolorum sapiente dicta exercitationem, pariatur harum nam?
//             Amet nemo iste quisquam eum fugit alias laudantium voluptatibus ab
//             cupiditate, impedit eveniet deleniti illum repellendus nulla modi
//             commodi unde vel maiores nisi? Lorem ipsum, dolor sit amet
//             consectetur adipisicing elit. Velit, repellat quidem sint voluptate
//             facere ex facilis corrupti ducimus reprehenderit nulla?
//           </div>

//           <div className="w-4/5 mt-6 flex flex-row items-center space-x-6">
//             <CustomButton
//               title={"Explore Products"}
//               containerStyles={"px-7 py-3"}
//               textStyles={"text-md"}
//             />

//             <CustomButton
//               title={"Start Minting NFTs"}
//               containerStyles={"bg-white px-7 py-3"}
//               textStyles={"text-[#E68002] text-md"}
//             />
//           </div>
//         </div>

//         {/* Background Image with Smooth Fade-in */}
//         <motion.div
//           className="w-[54vw] h-full"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         >
//           <Image
//             src={heroImage}
//             className="w-full h-full object-contain"
//             width={2500}
//             priority
//             height={2500}
//             alt="NFTs"
//           />
//         </motion.div>

//         <div className="w-full absolute -z-10 mt-[29%] -bottom-[100%] inset-0 ">
//           <Image
//             src={starDesign}
//             onClick={() => router.push("/")}
//             className="w-full h-full object-cover"
//             width={1000}
//             height={1000}
//             alt="BlockChain"
//           />
//         </div>
//       </div>

//       <div className="w-full flex mt-68 justify-center">
//         <div className="py-12">
//           <div className="text-3xl tracking-widest text-center font-medium">
//             How it works
//           </div>

//           <div className="flex flex-row items-center mt-12 space-x-3 relative">
//             {workFlow.map((item, i) => (
//               <React.Fragment key={i}>
//                 {/* Item */}
//                 <div className="flex flex-col items-center justify-center relative">
//                   {/* Icon */}
//                   <div className="w-20 h-20 p-5 flex items-center backdrop-blur-3xl bg-[#ffffff12] justify-center rounded-full overflow-hidden">
//                     <Image
//                       src={item.icon}
//                       className="w-full h-full object-contain"
//                       width={1000}
//                       height={1000}
//                       alt={item?.title}
//                     />
//                   </div>

//                   {/* Title */}
//                   <div className="mt-5 font-stretch-semi-expanded tracking-wider capitalize font-light text-lg text-center">
//                     {item?.title}
//                   </div>
//                 </div>

//                 {/* Separator Between Items (Except Last One) */}
//                 {i !== workFlow.length - 1 && (
//                   <div className="w-20 h-16 flex items-center justify-center">
//                     <Image
//                       src={seperator}
//                       className="w-full h-full object-contain"
//                       width={1000}
//                       height={1000}
//                       alt="separator"
//                     />
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;
