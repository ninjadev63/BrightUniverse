import React from "react";

export default function DarkButton({ children }) {
  return (
    <div>
      <button className="font-Inter text-[10px] px-3 py-[6px] 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-4 lg:py-3 md:px-3 md:py-2 w-full text-white 2xl:text-[22px] xl:text-[15px] lg:text-xs md:text-[8px]  bg-black rounded-full border border-[0.5px] border-white">
        {children}
      </button>
    </div>
  );
}
