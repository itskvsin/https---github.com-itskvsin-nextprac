import Link from "next/link";
import {SpotlightPreview}  from "./Spotlight";
import { MovingBorderDemo } from "./MovingBorder";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";

export default function HeroSection() {
  return (
    <div className="h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <SpotlightPreview />
      <div className="p-4 relative z-10 w-full text-center ">
        <h1 className="text-4xl font-bold md:7xl bg-clip-text text-transparent bg-gray-400">
          Hero Section
        </h1>
        <p>Master the art of hero section</p>
        <div className="mt-4">
            <Link href={"/courses"}><MovingBorderDemo  text={"Explore Courses"}/></Link>
        </div>
      </div>
    </div>
  );
}
