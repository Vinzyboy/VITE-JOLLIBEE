import { imgPath } from "@/components/helpers/functions-general";
import { CircleCheck, PointerIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <main className="w-full h-screen relative">
        <h1 className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-white">
          Order and Pay Here
        </h1>
        <img
          src={`${imgPath}/WelcomeBanner.jpg`}
          alt=""
          className="w-full h-full block object-cover"
        />

        <div className=" absolute w-full bottom-0 left-0">
          <div className="bg-primary text-white text-center p-4">
            <Link
              to="/order"
              className="text-4xl font-bold flex gap-5 justify-center items-center"
            >
              <PointerIcon size={30} className="rotate-[-30deg]" />
              Tap Here to Start
            </Link>
          </div>
          <div className="bg-white p-4 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <CircleCheck size={40} fill="red" stroke="white" />
              <h4 className="mb-0 leading-[1.1]">
                Pay with Carh <br /> or Card
              </h4>
            </div>

            <div className="pl-4 border-l-4 border-primary basis-[300px]">
              <h5 className="text-primary mb-1">For other paymetns</h5>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                molestias quo dignissimos
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Welcome;
