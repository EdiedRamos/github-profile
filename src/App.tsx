import { Filter, FilterResult, Hero } from "@/components";

import { GithubProvider } from "./provider/GithubProvider";

const App = () => {
  return (
    <GithubProvider>
      <Hero>
        <Filter />
        <FilterResult />
      </Hero>
    </GithubProvider>
  );
};

export default App;
