import { ChieldIcon, NestingIcon, StarIcon } from "@/assets";

import type { Repository } from "@/interfaces";

interface RepositoryInfo {
  repository: Repository;
}

export const RepositoryInfo = ({ repository }: RepositoryInfo) => {
  return (
    <article>
      <p>{repository.name}</p>
      <p>{repository.description}</p>
      <div>
        {repository.license && (
          <p>
            <span>
              <ChieldIcon />
            </span>{" "}
            {repository.license.spdx_id}
          </p>
        )}
        <p>
          <span>
            <NestingIcon />
          </span>{" "}
          {repository.forks_count}
        </p>
        <p>
          <span>
            <StarIcon />
          </span>{" "}
          {repository.stargazers_count}
        </p>
        <p>{repository.updated_at}</p>
      </div>
    </article>
  );
};
