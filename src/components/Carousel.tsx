"use client";

import { motion } from "framer-motion";

interface CarouselProps {
  images: string[];
  speed?: number; // seconds per full cycle
  imageWidth?: number; // width in px
}

const InfiniteSingleImageCarousel = ({
  images,
  speed = 10,
  imageWidth = 400,
}: CarouselProps) => {
  const allImages = [...images, ...images]; // duplicate for seamless loop
  const totalWidth = allImages.length * imageWidth;

  return (
    <div
      className="overflow-hidden w-screen mx-auto"
      style={{ width: `${imageWidth}px` }}
    >
      <div className=" overflow-hidden">
      <motion.div
        className="flex gap-10"
        animate={{ x: [-totalWidth / 2, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`carousel-${i}`}
            style={{ width: `${imageWidth}px`, height: "auto" }}
            className="w-full object-fill rounded-xl "
          />
        ))}
      </motion.div>
    </div>
    </div>
  );
};

export default InfiniteSingleImageCarousel;
