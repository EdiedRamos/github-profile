import { SearchIcon } from "@/assets";
import { useGithub } from "@/hook/useGithub";
import { useState } from "react";

export const Filter = () => {
  const { handleSearch } = useGithub();

  const [inputFocus, setInputFocus] = useState(false);

  const handleFocus = () => setInputFocus(true);
  const handleBlur = () => setInputFocus(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleSearch(event.target.value);

  return (
    <div className="pt-[32px]">
      <div
        className={`flex gap-2 bg-cc-midnight-blue mx-auto max-w-[400px] p-[16px] rounded-[16px] ${
          inputFocus ? "border-2 border-cc-vibrant-blue" : ""
        }`}
      >
        <SearchIcon />
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full outline-none bg-cc-midnight-blue text-cc-misty-gray text-cs-200"
          type="text"
          placeholder="username"
        />
      </div>
    </div>
  );
};
