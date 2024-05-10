import { GithubContext } from "@/context";

interface GithubProvider {
  children: React.ReactNode;
}

export const GithubProvider = ({ children }: GithubProvider) => {
  const values = null;

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};
