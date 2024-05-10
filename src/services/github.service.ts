import type { Profile, Repository } from "@/interfaces";

const GITHUG_API = "https://api.github.com/users";

export const GithubService = {
  async searchProfile(profile: string): Promise<Profile | undefined> {
    const response: Response = await fetch(`${GITHUG_API}/${profile}`);
    if (!response.ok) return undefined;
    return (await response.json()) as Profile;
  },
  async searchRepository(profile: string): Promise<Repository | undefined> {
    const response: Response = await fetch(`${GITHUG_API}/${profile}/repos`);
    if (!response.ok) return undefined;
    return (await response.json()) as Repository;
  },
};
