import React from "react";

export default function BlackButton({
  type = "type1",
  children,
  onClick,
  selected,
}) {
  // console.log(selected);
  return (
    <div onClick={onClick} className="cursor-pointer">
      {type === "type1" && (
        <div
          className={`select-none ${
            selected === true
              ? "text-white bg-black font-bold"
              : "bg-white text-black"
          }font-Inter text-center 2xl:py-7 2xl:px-10 2xl:text-xl py-4 text-[8px] mg:text-base mg:py-4 mg:px-8 md:text-sm md:py-4 md:px-8  rounded-full border border-gray-400 w-full hover:bg-black hover:text-white`}
        >
          {children}
        </div>
      )}
      {type === "type2" && (
        <div
          className={`  ${
            selected === true
              ? "bg-black text-white font-bold"
              : "bg-white text-black"
          }font-Inter 2xl:py-3 2xl:px-14 xl:py-4 xl:px-12 lg:py-3 lg:px- md:py-3 md:px-6 px-8 py-2 w-full 2xl:text-xl xl:text-[18px] lg:text-[15px] md:text-[16px] text-[8px] rounded-full border border-gray-400 hover:bg-black hover:text-white`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
