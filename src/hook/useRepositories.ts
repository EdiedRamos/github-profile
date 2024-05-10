import { useEffect, useState } from "react";

import { useGithub } from "@/hook";

export const useRepositories = () => {
  const { repositories } = useGithub();

  const [viewAll, setViewAll] = useState(false);

  const showAll = () => setViewAll(true);

  useEffect(() => {
    setViewAll(false);
  }, [repositories]);

  return {
    viewAll,
    showAll,
    repositoriesFiltered: viewAll ? repositories : repositories.slice(0, 4),
    needShowMore: repositories.length > 4,
  };
};
