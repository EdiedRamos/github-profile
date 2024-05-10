import { RepositoryInfo } from "./RepositoryInfo";
import { useRepositories } from "@/hook";

export const Repositories = () => {
  const { repositoriesFiltered, needShowMore, showAll, viewAll } =
    useRepositories();

  return (
    <section className="bg-cc-midnight-navy pt-8 pb-4">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
        {repositoriesFiltered.map((repository) => (
          <RepositoryInfo key={repository.id} repository={repository} />
        ))}
      </div>

      {needShowMore && !viewAll ? (
        <div className="mt-5 pb-5 flex">
          <button className="mx-auto" onClick={showAll}>
            <p className="text-center text-cc-misty-gray-200">
              View all repositories
            </p>
          </button>
        </div>
      ) : null}
    </section>
  );
};
