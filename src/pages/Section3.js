import React from "react";
import SlideRight from "../components/SlideRight";
import DarkButton from "../components/DarkButton";
import ScrollRotate from "../utils/ScrollRotate";
import { RotateImage, BlackStar } from "../components/Logo";
import SlideImage2 from "../components/SlideImage2";
import { useTranslation } from "react-i18next";

export default function Section3({ selectedLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="bg-black flex flex-col 2xl:pt-28 xl:pt-28 lg:pt-28 md:xl:pt-28 pt-12 pb-10 relative">
      <div className="2xl:pb-32 xl:pb-32 lg:pb-32 md:pb-16 pb-12">
        <SlideRight>
          <div className="flex justify-start">
            <div className="flex items-center gap-4">
              <div className="lg:w-[265px] lg:h-[265px] md:w-[220px] md:h-[220px] w-[122px] h-[122px]">
                <SlideImage2 />
              </div>
              <div className="flex flex-col relative">
                <div className="font-Balinest text-white 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[110px] text-[84px] leading-none">
                  SMART
                </div>
                <div className="absolute sm:-bottom-[22px] -bottom-[12px]  landingText text-white 2xl:text-[50px] xl:text-[50px] lg:text-[46px] md:text-[25px] text-[19px] leading-none">
                  DEVELOPMENT
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="lg:w-[265px] lg:h-[265px] md:w-[220px] md:h-[220px] w-[122px] h-[122px]">
                <SlideImage2 />
              </div>
              <div className="flex flex-col relative">
                <div className="font-Balinest text-white 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[110px] text-[84px] leading-none">
                  SMART
                </div>
                <div className="absolute sm:-bottom-[22px] -bottom-[12px] landingText text-white 2xl:text-[50px] xl:text-[50px] lg:text-[46px] md:text-[25px] text-[19px] leading-none">
                  DEVELOPMENT
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="lg:w-[265px] lg:h-[265px] md:w-[220px] md:h-[220px] w-[122px] h-[122px]">
                <SlideImage2 />
              </div>
              <div className="flex flex-col relative">
                <div className="font-Balinest text-white 2xl:text-[220px] xl:text-[220px] lg:text-[200px] md:text-[110px] text-[84px] leading-none">
                  SMART
                </div>
                <div className="absolute sm:-bottom-[22px] -bottom-[12px] landingText text-white 2xl:text-[50px] xl:text-[50px] lg:text-[46px] md:text-[25px] text-[19px] leading-none">
                  DEVELOPMENT
                </div>
              </div>
            </div>
          </div>
        </SlideRight>
      </div>
      <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-3">
        <div className="border-t-2 border-white"></div>
      </div>
      <div className="grid grid-cols-12 gap-2 2xl:px-32 xl:px-32 lg:px-16 md:px-10 px-5 pt-4 2xl:pb-14 xl:pb-14 lg:pb-14 md:pb-14 pb-6">
        <div className="hidden sm:flex lg:col-span-2 md:col-span-2 col-span-12">
          <div className="w-[58px] h-[59px]">
            <BlackStar />
          </div>
        </div>

        <div className="lg:col-span-10 md:col-span-10 col-span-12">
          <div className="grid grid-cols-12 gap-2 sm:pb-14 pb-4">
            <div className="lg:col-span-4 md:col-span-4 col-span-5 flex justify-end sm:pr-6">
              <div className="flex flex-col justify-between">
                <div className="2xl:text-3xl xl:text-[24px] lg:text-[22px] md:text-lg text-[12px] text-white">
                  SMART DEVELOPMENT
                </div>
                <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex w-[25px] h-[27px]">
                  <BlackStar />
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-8 col-span-6">
              <div className="font-Inter 2xl:text-3xl xl:text-[26px] lg:text-[22px] md:text-lg os:text-[14px] text-[13px] text-white">
                {t("combining...")}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="lg:col-span-4 md:col-span-4 col-span-5">
              <div className="flex 2xl:justify-end xl:justify-end lg:justify-end md:justify-end justify-end sm:pr-6 ml:pb-4 md:pb-4 ">
                <div className="2xl:text-3xl xl:text-[24px] lg:text-[22px] text-[12px] text-white">
                  AREAS
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 md:col-span-8 col-span-7">
              <div className="hidden sm:flex flex-col gap-3">
                <div className="flex gap-2">
                  <DarkButton>E-COMMERS</DarkButton>
                  <DarkButton>FINANCE</DarkButton>
                  <DarkButton>IT</DarkButton>
                  <DarkButton>EDUCATION</DarkButton>
                  <DarkButton>SOCIAL</DarkButton>
                </div>
                <div className="flex gap-2">
                  <DarkButton>ENTERTAINMENT</DarkButton>
                  <DarkButton>MEDICINE</DarkButton>
                  <DarkButton>FASHION</DarkButton>
                  <DarkButton>AUTO</DarkButton>
                </div>
                <div className="flex gap-2">
                  <DarkButton>BULIDING</DarkButton>
                  <DarkButton>REAL ESTATE</DarkButton>
                  <DarkButton>SPORT</DarkButton>
                </div>
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col gap-1">
                <div className="flex gap-2">
                  <DarkButton>E-COMMERS</DarkButton>
                  <DarkButton>FINANCE</DarkButton>
                </div>
                <div className="flex gap-1">
                  <DarkButton>IT</DarkButton>
                  <DarkButton>EDUCATION</DarkButton>
                  <DarkButton>SOCIAL</DarkButton>
                </div>
                <div className="flex">
                  <DarkButton>ENTERTAINMENT</DarkButton>
                </div>
                <div className="flex gap-1">
                  <DarkButton>MEDICINE</DarkButton>
                  <DarkButton>FASHION</DarkButton>
                </div>
                <div className="flex gap-1">
                  <DarkButton>AUTO</DarkButton>
                  <DarkButton>BULIDING</DarkButton>
                </div>
                <div className="flex gap-1">
                  <DarkButton>REAL ESTATE</DarkButton>
                  <DarkButton>SPORT</DarkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-full bg-[#333333] 2xl:w-[595px] 2xl:h-[295px] xl:w-[595px] xl:h-[295px] lg:w-[595px] lg:h-[295px] mg:w-[595px] mg:h-[295px] md:w-[595px] md:h-[295px] ml:w-[595px] ml:h-[295px] w-[270px] h-[135px] flex justify-center"></div>
      </div>
      <div className="flex justify-center">
        <div className="absolute bottom-8">
          <ScrollRotate>
            <div className="2xl:w-[300px] 2xl:h-[300px] xl:w-[300px] xl:h-[300px] lg:w-[300px] lg:h-[300px] mg:w-[300px] mg:h-[300px] ml:w-[300px] ml:h-[300px] md:w-[300px] md:h-[300px] w-[140px] h-[140px]">
              <RotateImage />
            </div>
          </ScrollRotate>
        </div>
      </div>
    </div>
  );
}
