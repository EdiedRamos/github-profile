import { InfoBadge } from "./InfoBadge";
import { useGithub } from "@/hook/useGithub";

export const ProfileInfo = () => {
  const { profile } = useGithub();

  return (
    <section className="bg-cc-midnight-navy">
      <div className="w-[95%] md:w-[760px] lg:w-[1000px] mx-auto flex gap-10 flex-col md:flex-row">
        <div className="relative w-[120px] h-[120px] top-[-30px] border-[7px] border-cc-midnight-navy rounded-[8px] bg-cc-midnight-navy mx-auto">
          <img
            className="rounded-[8px]"
            src={profile?.avatar_url}
            alt={`${profile?.name} avatar`}
          />
        </div>
        <div className="mt-[-50px] md:mt-[12px] flex-1">
          <div className="flex gap-[20px] flex-wrap flex-col md:flex-row">
            <InfoBadge title="Followers" content={`${profile?.followers}`} />
            <InfoBadge title="Following" content={`${profile?.following}`} />
            <InfoBadge title="Location" content={`${profile?.location}`} />
          </div>
        </div>
      </div>
    </section>
  );
};
