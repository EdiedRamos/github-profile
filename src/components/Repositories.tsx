import { useGithub } from "@/hook/useGithub";

export const Repositories = () => {
  const { repositories } = useGithub();

  return (
    <section className="bg-cc-midnight-navy">
      <p className="text-center text-green-400">
        View all repositories {repositories.length}
      </p>
    </section>
  );
};
