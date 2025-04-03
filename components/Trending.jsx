import { darkRed, orange, red } from "@/constants/image";
import Image from "next/image";
import { motion } from "framer-motion";

const nfts = [
  {
    icon: darkRed,
    quantity: 1024,
  },
  {
    icon: orange,
    quantity: 1024,
  },
  {
    icon: red,
    quantity: 1024,
  },
];

const Trending = () => {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="py-12">
        {/* Heading */}
        <motion.div
          className="text-[4rem] tracking-wide text-center font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          What's Trending?
          <div className="text-xl font-light mt-2">
            Checkout our weekly updated trending collection.
          </div>
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-28 lg:grid-cols-3 gap-8">
          {nfts.map((item, i) => (
            <motion.div
              key={i}
              className="col-span-1 gap-5 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Large NFT Image */}
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={item.icon}
                  className="w-full h-full object-contain"
                  width={2500}
                  priority
                  height={2500}
                  alt="NFTs"
                />
              </motion.div>

              {/* Small NFT Previews & Count */}
              <motion.div
                className="w-full flex space-x-4 items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                viewport={{ once: true }}
              >
                {[...Array(2)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-28 h-28 rounded-lg border-2 border-[#E68002]"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.icon}
                      className="w-full h-full object-contain"
                      width={2500}
                      priority
                      height={2500}
                      alt="NFTs"
                    />
                  </motion.div>
                ))}

                {/* Quantity Box */}
                <motion.div
                  className="w-28 h-28 flex items-center justify-center text-2xl bg-[#E68002] rounded-lg border-2 border-[#E68002]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.quantity}+
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Trending;
