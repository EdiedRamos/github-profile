import type { Profile, Repository } from "@/interfaces";
import { useEffect, useState } from "react";

import { GithubContext } from "@/context";
import { GithubService } from "@/services/github.service";

interface GithubProvider {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubProvider) => {
  const [previewProfile, setPreviewProfile] = useState<Profile>();
  const [profile, setProfile] = useState<Profile>();
  const [repositories, setRepositories] = useState<Repository[]>();
  const [username, setUsername] = useState<string>("github");
  const [search, setSearch] = useState<string>("");

  const handleSearch = (search: string): void => {
    setSearch(search);
  };

  useEffect(() => {
    if (search.length === 0) return;
    const timeout = setTimeout(() => {
      GithubService.searchProfile(search).then((data) => {
        if (!data) {
          setPreviewProfile(undefined);
        } else {
          setPreviewProfile(data);
        }
      });
    }, 500);
    return () => clearInterval(timeout);
  }, [search]);

  useEffect(() => {
    console.log({ username });
  }, [username]);

  const values = {
    previewProfile,
    profile,
    repositories,
    username,
    search,
    handleSearch,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};
