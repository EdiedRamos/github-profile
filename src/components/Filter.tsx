import { SearchIcon } from "@/assets";
import { useState } from "react";

export const Filter = () => {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="pt-[32px]">
      <div
        className={`flex gap-2 bg-cc-midnight-blue mx-auto max-w-[400px] p-[16px] rounded-[16px] ${
          inputFocus ? "border-2 border-cc-vibrant-blue" : ""
        }`}
      >
        <SearchIcon />
        <input
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          className="w-full outline-none bg-cc-midnight-blue text-cc-misty-gray text-cs-200"
          type="text"
          placeholder="username"
        />
      </div>
    </div>
  );
};
