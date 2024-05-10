import { HeroBackground } from "@/assets";

interface Hero {
  children?: React.ReactNode;
}

export const Hero = ({ children }: Hero) => {
  return (
    <section
      className="h-[250px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      {children}
    </section>
  );
};
