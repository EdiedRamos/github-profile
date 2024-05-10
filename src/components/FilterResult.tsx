import { useGithub } from "@/hook/useGithub";

export const FilterResult = () => {
  const { previewProfile } = useGithub();

  if (previewProfile === undefined) return <></>;

  return (
    <div className="max-w-[400px] bg-cc-midnight-blue mx-auto rounded-[16px] min-h-[100px] mt-4 flex items-center">
      {previewProfile === null ? (
        <div className="flex justify-center items-center w-full">
          <p className="text-cc-misty-gray">Not found</p>
        </div>
      ) : (
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-[12px] items-center p-[8px]">
          <img
            className="w-[80px] h-[80px] rounded-xl object-cover"
            src={previewProfile.avatar_url}
            alt={`${previewProfile.name} avatar`}
          />
          <div className="flex flex-col flex-wrap w-full">
            <p className="text-cc-misty-gray text-center sm:text-start">
              {previewProfile.name}
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
