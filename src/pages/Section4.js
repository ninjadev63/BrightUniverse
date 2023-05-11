import React from "react";
import SlideRight from "../components/SlideRight";
import LightButton from "../components/LightButton";
import { StarLogo, SlideImage3 } from "../components/Logo";
import { useTranslation } from "react-i18next";

export default function Section4({ selectedLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-16 pt-12 relative">
      <div className="pb-12">
        <SlideRight>
          <div className="flex justify-start">
            <div className="flex items-center">
              <div className="2xl:w-[350px] 2xl:h-[350px] xl:w-[350px] xl:h-[350px] lg:w-[330px] lg:h-[330px] md:w-[278px] md:h-[278px] w-[120px] h-[120px]">
                <SlideImage3 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="2xl:text-[78px] xl:text-[78px] lg:text-[70px] md:text-[51px] text-[30px] landingText leading-none">
                  PRODUCT
                </div>
                <div className="2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[147px] text-[82px] font-Balinest leading-none">
                  DESIGN
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="2xl:w-[350px] 2xl:h-[350px] xl:w-[350px] xl:h-[350px] lg:w-[330px] lg:h-[330px] md:w-[278px] md:h-[278px] w-[120px] h-[120px]">
                <SlideImage3 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="2xl:text-[78px] xl:text-[78px] lg:text-[70px] md:text-[51px] text-[30px] landingText leading-none">
                  PRODUCT
                </div>
                <div className="2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[147px] text-[82px] font-Balinest leading-none">
                  DESIGN
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="2xl:w-[350px] 2xl:h-[350px] xl:w-[350px] xl:h-[350px] lg:w-[330px] lg:h-[330px] md:w-[278px] md:h-[278px] w-[120px] h-[120px]">
                <SlideImage3 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="2xl:text-[78px] xl:text-[78px] lg:text-[70px] md:text-[51px] text-[30px] landingText leading-none">
                  PRODUCT
                </div>
                <div className="2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[147px] text-[82px] font-Balinest leading-none">
                  DESIGN
                </div>
              </div>
            </div>
          </div>
        </SlideRight>
      </div>
      <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-10">
        <div className="border-t-2 border-black"></div>
      </div>
      <div className="grid grid-cols-12 2xl:px-32 xl:px-32: lg:px-20 md:px-14 px-8 pt-4 lg:pb-10 pb-12">
        <div className="hidden sm:flex lg:col-span-2 md:col-span-2 col-span-12">
          {/* <div className="text-4xl">LOGO</div> */}
          <div className="w-[56px] h-[57px]">
            <StarLogo />
          </div>
        </div>
        {/* <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex w-[25px] h-[27px] absolute top-[585px]">
          <StarLogo />
        </div> */}
        <div className="lg:col-span-10 md:col-span-10 col-span-12 ">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-4 md:col-span-3 col-span-5 flex justify-end sm:pr-6">
              <div className="2xl:text-[29px] xl:text-2xl lg:text-[19px] md:text-[14px] text-[12px] 2xl:pb-4 xl:pb-4 lg:pb-4 md:pb-4 sm:pb-4 pb-1 pr-2">
                PRODUCT DESIGN
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-9 col-span-7">
              <div className="font-Inter 2xl:text-3xl xl:text-[26px] lg:text-[20px] text-[13px]">
                {t("creating digital")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 sm:pt-14 pt-4">
            <div className="lg:col-span-4 md:col-span-3 col-span-5 ">
              <div className="flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end justify-end sm:pr-6">
                <div className="2xl:text-[29px] xl:text-2xl lg:text-[19px] md:text-[14px] text-[12px] pr-2">
                  AREAS
                </div>
              </div>
            </div>
            <div className=" lg:col-span-8 md:col-span-9 col-span-7">
              <div className="flex-col gap-4  hidden sm:flex">
                <div className="flex gap-2">
                  <LightButton>VISUAL IDENTITY</LightButton>
                  <LightButton>WEB DESIGN</LightButton>
                  <LightButton>UX & UI DESIGN</LightButton>
                </div>
                <div className="flex gap-2">
                  <LightButton>MOTION DESIGN</LightButton>
                  <LightButton>3D VISUALS</LightButton>
                  <LightButton>DEVELOPMENT</LightButton>
                </div>
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col gap-1">
                <div className="flex gap-1">
                  <LightButton>VISUAL IDENTITY</LightButton>
                  <LightButton>3D VISUALS</LightButton>
                </div>
                <div className="flex gap-1">
                  <LightButton>WEB DESIGN</LightButton>
                  <LightButton>UX & UI DESIGN</LightButton>
                </div>

                <div className="flex gap-1">
                  <LightButton>DEVELOPMENT</LightButton>
                  <LightButton>MOTION DESIGN</LightButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
