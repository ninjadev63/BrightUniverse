import React from "react";

export default function LightButton({ children }) {
  return (
    <div>
      <button className="font-Inter 2xl:px-4 2xl:py-3 2xl:text-[23px] xl:py-3 xl:px-3 px-2 py-[6px] xl:text-[19px] md:text-[11px] text-[9px] md:px-3 md:py-2 bg-white rounded-full border-[0.5px] border-gray-400">
        {children}
      </button>
    </div>
  );
}
