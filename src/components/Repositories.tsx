import { RepositoryInfo } from "./RepositoryInfo";
import { useGithub } from "@/hook/useGithub";

export const Repositories = () => {
  const { repositories } = useGithub();

  return (
    <section className="bg-cc-midnight-navy">
      {repositories.map((repository) => (
        <RepositoryInfo key={repository.id} repository={repository} />
      ))}
      <p className="text-center text-green-400">
        View all repositories {repositories.length}
      </p>
    </section>
  );
};
