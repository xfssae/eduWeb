import { Phone } from "lucide-react";
import heroBanner1 from "../assets/hero-banner-1.jpg";
import heroBanner2 from "../assets/hero-banner-2.jpg";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="bg-heroBg bg-cover w-screen h-screen flex flex-col flex-1 p-24 md:flex-row gap-8">
      <div className="w-full md:w-2/3 flex flex-col text-center  ">
        <h2 className=" md:text-left mb-2 text-2xl md:text-6xl tracking-tight leading-tight font-bold md:mt-6">
          The Best Program to <span className="text-red-500">Enroll</span> For
          Exchange
        </h2>
        <p className="text-xl md:text-left mb-4">
          India's largest learning platfom for Computer Science Student
        </p>
        <Button className="bg-green-700 w-28 p-8 mx-auto md:mx-0 ">
          Join Us
        </Button>
      </div>
      <div className="flex gap-4">
        <img
          src={heroBanner1}
          alt="right"
          className=" w-50 h-60 rounded-bl-[90px] rounded-tr-[90px]"
        />
        <img
          src={heroBanner2}
          alt="right"
          className=" w-64 h-80 rounded-br-[90px] rounded-tl-[90px] md:mt-20"
        />
        <div className=" absolute top-[500px] right-68 bg-white rounded-br-[48px] rounded-tl-[48px] w-72 h-18 p-4 hidden md:flex items-center gap-4">
          <Phone className="text-red-500 rounded-full w-14 h-14 py-3 bg-gray-300" />

          <div className="flex flex-col ">
            <span className="text-gray-500 font-bold">Online Support </span>
            <span className="text-red-500 text-2xl "> +91-7004485581</span>
          </div>
        </div>
      </div>
    </div>
  );
}
