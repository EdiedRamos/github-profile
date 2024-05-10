import type { Profile, Repository } from "@/interfaces";

import { createContext } from "react";

interface GithubContext {
  previewProfile: Profile | undefined;
  profile: Profile | undefined;
  repositories: Repository[] | undefined;
  username: string;
  search: string;
  handleSearch: (search: string) => void;
}

export const GithubContext = createContext<GithubContext | null>(null);
