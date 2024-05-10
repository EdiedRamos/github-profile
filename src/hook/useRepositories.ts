import { useGithub } from "@/hook";
import { useState } from "react";

export const useRepositories = () => {
  const { repositories } = useGithub();

  const [viewAll, setViewAll] = useState(false);

  const showAll = () => setViewAll(true);

  return {
    viewAll,
    showAll,
    repositoriesFiltered: viewAll ? repositories : repositories.slice(0, 4),
    needShowMore: repositories.length > 4,
  };
};
