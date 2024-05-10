import { ChieldIcon, NestingIcon, StarIcon } from "@/assets";

import type { Repository } from "@/interfaces";
import { formatNumberUSD } from "@/utils";

interface RepositoryInfo {
  repository: Repository;
}

export const RepositoryInfo = ({ repository }: RepositoryInfo) => {
  return (
    <article className="bg-gradient-to-r from-cc-midnight-blue to-cc-midnight-purple text-cc-misty-gray-200 p-5 rounded-xl">
      <p className="text-cs-300 text-cc-misty-gray">{repository.name}</p>
      <p className="text-cs-200 mt-3">{repository.description}</p>
      <div className="flex flex-wrap gap-3 items-center mt-5 font-medium">
        {repository.license && (
          <div className="flex gap-1">
            <ChieldIcon />
            <p>{repository.license.spdx_id}</p>
          </div>
        )}
        <div className="flex gap-1">
          <NestingIcon />
          <p>{formatNumberUSD(repository.forks_count)}</p>
        </div>
        <div className="flex gap-1">
          <StarIcon />
          <p>{formatNumberUSD(repository.stargazers_count)}</p>
        </div>
        <p className="text-cs-100">{repository.updated_at}</p>
      </div>
    </article>
  );
};
