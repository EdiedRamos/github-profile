import type { Profile, Repository } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

import { GithubContext } from "@/context";
import { GithubService } from "@/services/github.service";

interface GithubProvider {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubProvider) => {
  const [previewProfile, setPreviewProfile] = useState<Profile | null>();
  const [profile, setProfile] = useState<Profile>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [username, setUsername] = useState<string>("github");
  const [search, setSearch] = useState<string>("");

  const resetAllSearchInfo = () => {
    setSearch("");
    setPreviewProfile(undefined);
  };

  const handleSearch = (search: string): void => {
    setSearch(search);
  };

  const handleUsername = (): void => {
    setUsername(search);
  };

  const handleProfile = useCallback((username: string) => {
    GithubService.searchProfile(username).then((data) => {
      if (data) {
        setProfile(data);
      } else {
        setProfile(undefined);
      }
    });
  }, []);

  const handleRepositories = useCallback((username: string) => {
    GithubService.searchRepository(username).then((data) => {
      if (data) {
        setRepositories(data);
      } else {
        setRepositories([]);
      }
    });
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setPreviewProfile(undefined);
      return;
    }
    const timeout = setTimeout(() => {
      GithubService.searchProfile(search).then((data) => {
        console.log({ data });
        if (!data) {
          setPreviewProfile(null);
        } else {
          setPreviewProfile(data);
        }
      });
    }, 500);
    return () => clearInterval(timeout);
  }, [search]);

  useEffect(() => {
    handleProfile(username);
    handleRepositories(username);
    resetAllSearchInfo();
  }, [username]);

  useEffect(() => {
    handleProfile("github");
    handleRepositories("github");
  }, []);

  const values = {
    previewProfile,
    profile,
    repositories,
    username,
    search,
    handleSearch,
    handleUsername,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};
