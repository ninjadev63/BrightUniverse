import React from "react";

export default function InputField({ children }) {
  return (
    <div>
      <input
        className="w-full border-b-2 border-[#939393] pr-4 py-4 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-[12px]"
        placeholder={children}
      ></input>
    </div>
  );
}
