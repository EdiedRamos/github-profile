import { useGithub } from "@/hook/useGithub";

export const FilterResult = () => {
  const { previewProfile, handleUsername } = useGithub();

  if (previewProfile === undefined) return <></>;

  return (
    <div className="custom-container max-w-[400px] bg-cc-midnight-blue mx-auto rounded-[16px] min-h-[100px] mt-4 flex items-center relative z-10">
      {previewProfile === null ? (
        <div className="flex justify-center items-center w-full">
          <p className="text-cc-misty-gray">😟 Not found 🙄</p>
        </div>
      ) : (
        <div
          className="flex flex-wrap sm:flex-nowrap justify-center w-full gap-[12px] items-center p-[8px] hover:outline-none hover:ring hover:ring-cc-vibrant-blue hover:rounded-xl hover:cursor-pointer"
          onClick={handleUsername}
        >
          <img
            className="w-[80px] h-[80px] rounded-xl object-cover"
            src={previewProfile.avatar_url}
            alt={`${previewProfile.name} avatar`}
          />
          <div className="flex flex-col flex-wrap w-full">
            <p className="text-cc-misty-gray text-center sm:text-start">
              {previewProfile.name ?? previewProfile.login}
            </p>
            <p className="text-cc-misty-gray text-cs-100 text-center sm:text-start">
              {previewProfile.bio}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
