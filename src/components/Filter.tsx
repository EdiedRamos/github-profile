import { SearchIcon } from "@/assets";

export const Filter = () => {
  return (
    <div className="pt-[32px]">
      <div className="flex gap-2 bg-cc-midnight-blue mx-auto max-w-[400px] p-[16px] rounded-[16px]">
        <SearchIcon />
        <input
          className="bg-cc-midnight-blue text-cc-misty-gray outline-none"
          type="text"
          placeholder="username"
        />
      </div>
    </div>
  );
};
