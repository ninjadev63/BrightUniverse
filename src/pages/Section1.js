import React from "react";
import { HoverImage2, HoverImage3 } from "../components/Logo";
import { useTranslation } from "react-i18next";

export default function Section1({ selectedLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="bg-black xl:px-32 lg:px-15 md:px-14 px-6 grid grid-cols-12 sm:pt-12 pt-32 relative">
      <div className="xl:col-span-6 lg:col-span-6 md:col-span-7 col-span-12 xl:pl-18 lg:pl-5">
        <div className="flex flex-col justify-around">
          <div className="flex justify-center 2xl:relative xl:relative lg:relative md:relative sm:relative absolute right-0 bottom-0">
            <div className="w-[149px] h-[149px] 2xl:w-[330px] 2xl:h-[331px] xl:w-[330px] xl:h-[331px] lg:w-[330px] lg:h-[331px] md:w-[330px] md:h-[331px] sm:w-[330px] sm:h-[331px] rotationImage">
              <HoverImage2 />
            </div>
          </div>
          <div className="flex flex-col gap-0">
            <div className="font-Balinest leading-none tracking-wide text-[#f2a3b9] text-[65px] 2xl:text-[150px] xxl:text-[145px] xl:text-9xl lg:text-[112px] md:text-[90px] os:text-[85px]">
              MISSION
            </div>
            <div className="landingText leading-none text-[30px] text-[#f2a3b9] 2xl:text-[58px] xxl:text-[55px] xl:text-5xl lg:text-[42px] md:text-4xl os:text-[36px]">
              STATEMENT
            </div>
            <div className="landingText leading-none text-[30px] text-[#f2a3b9] 2xl:text-[58px] xxl:text-[55px] xl:text-5xl lg:text-[42px] md:text-4xl os:text-[36px]">
              DRAFT
            </div>
          </div>
          <div className="flex justify-center 2xl:relative xl:relative lg:relative md:relative sm:relative absolute top-0 right-0">
            <div className="w-[217px] h-[217px] 2xl:w-[350px] 2xl:h-[352px] xl:w-[350px] xl:h-[352px] lg:w-[350px] lg:h-[352px] md:w-[350px] md:h-[352px] sm:w-[350px] sm:h-[352px] customRotation">
              <HoverImage3 />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-6 lg:col-span-6 md:col-span-5 col-span-12 2xl:pt-[16.5rem] xxl:pt-[14rem] xl:pt-[10rem] lg:pt-[12.5rem] md:pt-[11rem] pt-10 pb-32 xl:pr-15 lg:pr-10">
        <div className="flex flex-col gap-6">
          <div className="font-Inter text-white xl:text-[26px] lg:text-2xl md:text-xl">
            {t("we believe...")}
          </div>

          <div className="font-Inter text-white xl:text-[26px] lg:text-2xl md:text-xl">
            {t("so we...")}
          </div>
        </div>
      </div>
    </div>
  );
}
