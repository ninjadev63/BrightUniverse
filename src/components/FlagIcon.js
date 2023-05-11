import React from "react";

export default function FlagIcon({ flag, label }) {
  return (
    <div className="flex items-center">
      <div>{flag}</div>
      <div className="">{label}</div>
    </div>
  );
}
