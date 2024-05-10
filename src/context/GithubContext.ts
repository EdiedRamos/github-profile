import type { Profile, Repository } from "@/interfaces";

import { createContext } from "react";

interface GithubContext {
  previewProfile: Profile | undefined | null;
  profile: Profile | undefined;
  repositories: Repository[];
  username: string;
  search: string;
  handleSearch: (search: string) => void;
  handleUsername: () => void;
}

export const GithubContext = createContext<GithubContext | null>(null);
