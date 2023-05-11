import React from "react";
import SlideRight from "../components/SlideRight";
import LightButton from "../components/LightButton";
import { IconLogo, StarLogo, SlideImage1 } from "../components/Logo";
import { useTranslation } from "react-i18next";

export default function Section2({ selectedLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col 2xl:pt-28 xl:pt-28 lg:pt-28 md:pt-28 pt-12 relative">
      <div className="pb-12">
        <SlideRight>
          <div className="flex justify-start">
            <div className="flex items-center">
              <div className="lg:w-[350px] lg:h-[350px] md:w-[270px] md:h-[270px] w-[120px] h-[120px]">
                <SlideImage1 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="landingText xl:text-[78px] lg:text-[70px] md:text-[55px] text-[29px] leading-none font-bold">
                  CREATIVE
                </div>
                <div className="font-Balinest 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[160px] text-[82px] leading-none">
                  DESIGN
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="lg:w-[350px] lg:h-[350px] md:w-[90px] md:h-[90px] w-[120px] h-[120px]">
                <SlideImage1 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="landingText xl:text-[78px] lg:text-[70px] md:text-[55px] text-[29px] leading-none font-bold">
                  CREATIVE
                </div>
                <div className="font-Balinest 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[160px] text-[82px] leading-none">
                  DESIGN
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="lg:w-[350px] lg:h-[350px] md:w-[270px] md:h-[270px] w-[120px] h-[120px]">
                <SlideImage1 />
              </div>
              <div className="flex flex-col pt-[12px]">
                <div className="landingText xl:text-[78px] lg:text-[70px] md:text-[55px] text-[29px] leading-none font-bold">
                  CREATIVE
                </div>
                <div className="font-Balinest 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[160px] text-[82px] leading-none">
                  DESIGN
                </div>
              </div>
            </div>
          </div>
        </SlideRight>
      </div>
      <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-3">
        <div className="border-t-2 border-black"></div>
      </div>
      <div className="grid grid-cols-12 gap-2 xl:px-32 lg:px-10 md:px-10 px-5 pb-12">
        <div className="hidden sm:flex lg:col-span-2 md:col-span-2 col-span-12">
          <div className="w-[56px] h-[57px]">
            <StarLogo />
          </div>
        </div>

        <div className="lg:col-span-10 md:col-span-10 col-span-12 pt-4">
          <div className="grid grid-cols-10 gap-2 xl:pb-14 lg:pb-14 md:pb-14 pb-4">
            <div className="lg:col-span-3 md:col-span-3 col-span-4 flex justify-end sm:pr-6">
              <div className="flex flex-col justify-between">
                <div className="font-Inter 2xl:text-3xl xl:text-[24px] lg:text-xl md:text-lg  text-[12px] 2xl:py-0 xl:py-0 lg:py-0 ">
                  CREATIVE DESIGN
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex w-[25px] h-[27px] ">
                  <StarLogo />
                </div>
              </div>
            </div>
            <div className="2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-7 col-span-6">
              <div className=" font-Inter 2xl:text-[28px] xl:text-[26px] lg:text-xl md:text-lg os:text-[14px] text-[13px]">
                {t("we do not...")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-2">
            <div className="lg:col-span-3 md:col-span-3 col-span-4">
              <div className="flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end justify-end sm:pr-6">
                <div className="font-Inter 2xl:text-3xl xl:text-[26px] lg:text-xl md:text-lg text-[12px]">
                  AREAS
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 md:col-span-7 col-span-6">
              <div className="hidden sm:flex flex-col gap-3">
                <div className="flex lg:gap-4">
                  <LightButton>VISUAL IDENTITY</LightButton>
                  <LightButton>ARCHERTYPE</LightButton>
                  <LightButton>LOGOTYPE</LightButton>
                  <LightButton>UI KIT</LightButton>
                </div>
                <div className="flex lg:gap-4">
                  <LightButton>COLOUR CODING</LightButton>
                  <LightButton>FONT CODING</LightButton>
                  <LightButton>BRANDING</LightButton>
                </div>
                <div className="flex lg:gap-4">
                  <LightButton>GUIDE LINES</LightButton>
                  <LightButton>DESIGN SYSTEM</LightButton>
                </div>
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col gap-1">
                <div className="flex gap-1">
                  <LightButton>VISUAL IDENTITY</LightButton>
                  <LightButton>ARCHERTYPE</LightButton>
                </div>
                <div className="flex gap-1">
                  <LightButton>LOGOTYPE</LightButton>
                  <LightButton>COLOUR CODING</LightButton>
                </div>
                <div className="flex gap-1">
                  <LightButton>UI KIT</LightButton>
                  <LightButton>FONT CODING</LightButton>
                </div>
                <div className="flex gap-1">
                  <LightButton>BRANDING</LightButton>
                  <LightButton>GUIDE LINES</LightButton>
                </div>
                <div className="flex">
                  <LightButton>DESIGN SYSTEM</LightButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
