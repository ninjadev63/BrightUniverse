import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Section7({ selectedLanguage }) {
  const { t } = useTranslation();

  return (
    <div className="bg-black xl:px-32 xl:pt-28 lg:px-14 lg:pt-20 md:px-14 px-5 pt-12 pb-5">
      <div className="grid grid-cols-12">
        <div className="lg:col-span-6 col-span-12">
          <div
            className={`${
              selectedLanguage.key === "en"
                ? "landing-text"
                : "font-CoFoKakBlack font-bold"
            }xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-bold text-white pb-10`}
          >
            {t("have an idea?")}
          </div>
          <a href="https://t.me/victoriachupakhina" target="_blank">
            <button className="bg-black font-Inter text-white  border-white border-[0.5px] sm:text-2xl text-[17px]  px-14 py-4 rounded-full hover:bg-white hover:text-black">
              {t("tell us about it")}
            </button>
          </a>

          <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[12px] text-white hover:text-blue-700 py-10">
            brightuniversal.art@gmail.com
          </div>
          <div className="flex flex-col gap-2 pb-10">
            <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-[#939393]">
              United States, Florida, 6835 Fisher
            </div>
            <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-[#939393]">
              Island Dr Unit 6835, 1, Miami
            </div>
            <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-[#939393]">
              Beach, 00001
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <div className="flex justify-around xl:pt-72 lg:pt-64 pt-5">
            <a
              href="https://www.linkedin.com/in/victoria-chupakhina-53682225b/"
              target="_blank"
            >
              <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-white cursor-pointer">
                Linkedin
              </div>
            </a>
            <a href="https://www.behance.net/victoriabraf2f" target="_blank">
              <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-white cursor-pointer">
                Behance
              </div>
            </a>
            <a
              href="https://instagram.com/bright_digital_design?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[15px] text-white cursor-pointer">
                Instagram
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-12 flex justify-center pt-14">
          <div className="text-white lg:text-xl text-[9px]">
            &copy; 2023 Bright Universal all rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
