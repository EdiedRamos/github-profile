import { GithubContext } from "@/context";
import { useContext } from "react";

export const useGithub = () => {
  const githubContext = useContext(GithubContext);
  if (!githubContext)
    throw new Error("useGithub must to be inside a GithubContext");
  return githubContext;
};
