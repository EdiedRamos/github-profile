import { Filter, Hero } from "@/components";

import { GithubProvider } from "./provider/GithubProvider";

const App = () => {
  return (
    <GithubProvider>
      <Hero>
        <Filter />
      </Hero>
    </GithubProvider>
  );
};

export default App;
