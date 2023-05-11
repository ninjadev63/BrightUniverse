import React from "react";
import SlideRight from "../components/SlideRight";
import SubBg1 from "../components/SubBg1";
import SubBg2 from "../components/Subbg2";
import SubBg3 from "../components/Subbg3";

export default function Section5({ selectedLanguage }) {
  return (
    <div className="flex flex-col pb-4 relative bg-black">
      <div className="flex justify-center">
        <div className="landingText text-white 2xl:text-3xl xl:text-3xl lg:text-3xl ml:text-3xl mg:text-3xl md:text-3xl text-[18px] 2xl:pt-24 xl:pt-24 lg:pt-24 ml:pt-24 mg:pt-24 md:pt-24 pt-12 2xl:pb-24 xl:pb-24 lg:pb-24 mg:pb-24 ml:pb-24 md:pb-24 pb-12 font-bold">
          WE MAKE IT HAPPEN
        </div>
      </div>
      <div className="relative w-full h-full rounded-3xl 2xl:px-36 xl:px-36 lg:px-36 ml:px-36 mg:px-36 md:px-36 p-10">
        <SubBg1></SubBg1>
        <div className="absolute sm:top-[44%] top-[35%] sm:-left-[10%] left-[20%]">
          <SlideRight>
            <div className=" flex justify-start gap-32">
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                WEBSITES
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                WEBSITES
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                WEBSITES
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
      <div className="relative w-full h-full rounded-3xl 2xl:px-36 xl:px-36 lg:px-36 ml:px-36 mg:px-36 md:px-36 p-10">
        <SubBg2></SubBg2>
        <div className="absolute sm:top-[44%] top-[41%] sm:-left-[29%] text-center">
          <SlideRight>
            <div className="flex justify-start gap-32">
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                MOBILE APPS
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                MOBILE APPS
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                MOBILE APPS
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
      <div className="relative w-full h-full rounded-3xl 2xl:px-36 xl:px-36 lg:px-36 ml:px-36 mg:px-36 md:px-36 p-10">
        <SubBg3></SubBg3>
        <div className="absolute sm:top-[44%] sm:-left-[12%] top-[39%] left-[20%]">
          <SlideRight>
            <div className="flex justify-start gap-32">
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                BRANDING
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                BRANDING
              </div>
              <div className="landingText 2xl:text-[60px] xl:text-[60px] lg:text-[51px] mg:text-[51px] ml:text-5xl md:text-5xl text-[30px] text-white">
                BRANDING
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </div>
  );
}
