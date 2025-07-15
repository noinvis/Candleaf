import React from "react";
import image from "../../images/image.svg";
import { CiCircleCheck } from "react-icons/ci";
import { CHECK } from "../../static/index";

const Learn = () => {
  return (
    <div className="bg-[#F7F8FA] py-[100px] max-[990px]:py-[30px]">
      <div className="container flex items-center justify-between max-[990px]:flex-col-reverse">
        <div className="w-[50%] max-[990px]:w-full">
          <p className="text-[40px] font-semibold font-[Poppins] text-[#1D252C] w-[60%] max-[990px]:w-full max-[990px]:text-center max-[600px]:text-[28px]">
            Clean and fragrant soy wax
          </p>
          <p className="text-green-500 mb-[40px] max-[990px]:text-center">
            Made for your home and for your wellness
          </p>
          {CHECK.map((item, inx) => {
            return (
              <div key={inx} className="max-[990px]:mx-auto">
                <p key={inx} className="flex gap-[10px] font-medium">
                  <CiCircleCheck />
                  {item}
                </p>
              </div>
            );
          })}
          <div className="flex max-[990px]:justify-center">
            <button className="bg-green-500 py-[8px] px-[40px] text-white font-medium rounded-[4px] green hover:bg-white duration-300 hover:text-[green] mt-[70px] max-[990px]:mt-[30px]">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-[50%] max-[990px]:w-full flex max-[990px]:justify-center">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Learn;
