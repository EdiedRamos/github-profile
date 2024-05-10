import { SearchIcon } from "@/assets";
import { useGithub } from "@/hook/useGithub";

export const Filter = () => {
  const { handleSearch } = useGithub();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    handleSearch(event.target.value);

  return (
    <div className="pt-[32px] custom-container">
      <div className={"relative flex mx-auto max-w-[400px]"}>
        <SearchIcon className="absolute top-[50%] left-3 translate-y-[-50%] text-red-400" />
        <input
          onChange={handleChange}
          className="w-full pl-11 pr-4 h-[50px] rounded-[16px] focus:outline-none focus:ring focus:ring-cc-vibrant-blue bg-cc-midnight-blue text-cc-misty-gray text-cs-200"
          type="text"
          placeholder="username"
        />
      </div>
    </div>
  );
};
