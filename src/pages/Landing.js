import React, { useState, useRef, useEffect } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import {
  MainLogo,
  LogoRotation,
  HoverImage1,
  HoverImage2,
  HeaderLogo,
  HoverImage4,
} from "../components/Logo";
import SubBgImage from "../components/SubBgImage";
import { Link } from "react-scroll";
import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants/index";

export default function Landing() {
  const divRef = useRef(null);
  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.style.transform = "rotate(180deg)";
    }
  }, []);
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const handleClick = () => {
    <Link to="Section6" spy={true} smooth={true}>
      Hire Me
    </Link>;
  };
  return (
    <div>
      <div>
        <div className="main-container h-[105vh] hidden is:flex"></div>

        <div className="absolute top-6 right-2 z-50">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>

        <div className="flex justify-center">
          <div className="top-[1.5rem] absolute flex justify-center items-center gap-1">
            <div className="w-[32px] h-[32px] relative">
              <MainLogo />
            </div>
            <div
              className="logoRotation w-[16px] h-fit top-0 left-[8px] absolute"
              ref={divRef}
            >
              <LogoRotation />
            </div>
            <div className="landingText lg:text-xl text-[13px] text-white">
              BRIGHT UNIVERSE
            </div>
          </div>
        </div>
        <div className="mobile-container 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex max-w-full h-[90vh]"></div>
        <div className="w-full absolute 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden flex flex-col top-[39%] px-5">
          <div className="grid grid-cols-12 relative">
            <div className="col-span-12">
              <div className="landingText font-bold leading-none text-[#e7fa79]  os:text-[34px] is:text-5xl text-[35px]">
                WE
              </div>
            </div>
            {/* <div className="top-[240px] right-0 absolute">
              <div className="rotationImage w-[230px] h-auto">
                <HoverImage4 />
              </div>
            </div> */}
          </div>

          <div className="col-span-12">
            <button
              onClick={handleClick}
              className="font-Balinest leading-none flex justify-center w-full px-8 pt-[15px] pb-[5px] text-[85px] text-black bg-[#e7fa79] rounded-full  hover:bg-black hover:text-[#e7fa79] transition duration-900 ease-in"
            >
              <Link to="section6" spy={true} smooth={true}>
                CREATE
              </Link>
            </button>
          </div>
          <div className="col-span-12">
            <div className="landingText font-bold text-[#e7fa79] 2xl:text-[116px] xl:text-[95px] lg:text-[72px] md:text-[55px] os:text-[35px] is:text-5xl text-[31px] leading-none">
              CONNECTED
            </div>
          </div>
          <div className="col-span-12 ">
            <div className="landingText font-bold text-[#e7fa79] 2xl:text-[116px] xl:text-[95px] lg:text-[75px] md:text-[55px] os:text-[35px] is:text-5xl text-[31px] leading-none">
              BRANDS
            </div>
          </div>
        </div>

        <div className="absolute lg:px-40 md:px-20 sm:top-[8rem] ">
          <div className="grid grid-cols-12 relative">
            <div className="col-span-4"></div>
            <div className="col-span-8">
              <div className="w-full h-auto z-0">
                <SubBgImage />
              </div>
            </div>
            <div className="lg:-top-24 lg:-right-28 md:-top-[4rem] md:-right-[4rem] absolute z-1000 rotationImage">
              <div className="2xl:w-[450px] 2xl:h-[450px] xl:w-[400px] xl:h-[400px] lg:w-[320px] lg:h-[320px] mg:w-[300px] mg:h-[300px] ml:w-[300px] ml:h-[300px] md:w-[220px] md:h-[220px] is:w-[220px] is:h-[220px] w-[120px] h-[120px] hidden sm:flex">
                <HoverImage1 />
              </div>
            </div>
            <div className="hidden sm:flex">
              <div className="col-span-12 -bottom-0.5 absolute z-50 w-full flex flex-col 2xl:gap-2">
                <div className="grid grid-cols-12">
                  <div className="col-span-3 pb-1">
                    <div className="landingText font-bold leading-none text-[#e7fa79] 2xl:text-[112px] xxl:text-[104px] xl:text-[90px] lg:text-[66px] md:text-[55px] os:text-[34px] is:text-5xl text-[31px]">
                      WE
                    </div>
                  </div>
                </div>

                <div className="col-span-12">
                  <div className="grid grid-cols-12">
                    <div className="lg:col-span-7 md:col-span-7 sm:col-span-7 col-span-12 xxl:pb-1">
                      <button
                        onClick={handleClick}
                        className="font-Balinest w-full px-8 pt-7 xl:pt-[37px] xl:pb-6 lg:pt-[30px] lg:pb-[1rem] 2xl:text-[175px] xxl:text-[175px] xl:text-[150px] lg:text-[109px] md:text-8xl sm:text-8xl text-black bg-[#e7fa79] rounded-full  hover:bg-black hover:text-[#e7fa79] transition duration-900 ease-in"
                      >
                        <Link to="section6" spy={true} smooth={true}>
                          CREATE
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12">
                      <div className="landingText font-bold text-[#e7fa79] 2xl:text-[112px] xxl:text-[104px] xl:text-[90px] lg:text-[66px] md:text-[55px] os:text-[35px] is:text-5xl text-[31px] leading-none">
                        CONNECTED
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12">
                    <div className="col-span-8">
                      <div className="landingText font-bold text-[#e7fa79] 2xl:text-[112px] xxl:text-[104px] xl:text-[90px] lg:text-[66px] md:text-[55px] os:text-[35px] is:text-5xl text-[31px] leading-none">
                        BRANDS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section1 selectedLanguage={selectedLanguage} />
      <Section2 selectedLanguage={selectedLanguage} />
      <Section3 selectedLanguage={selectedLanguage} />
      <div>
        <Section4 selectedLanguage={selectedLanguage} />
      </div>
      <div>
        <Section5 selectedLanguage={selectedLanguage} />
      </div>
      <div id="section6">
        <Section6 selectedLanguage={selectedLanguage} />
      </div>
      <Section7 selectedLanguage={selectedLanguage} />
    </div>
  );
}
