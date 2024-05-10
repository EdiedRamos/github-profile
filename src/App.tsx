import { Filter, FilterResult, Hero, ProfileInfo } from "@/components";

import { GithubProvider } from "./provider/GithubProvider";

const App = () => {
  return (
    <GithubProvider>
      <Hero>
        <Filter />
        <FilterResult />
      </Hero>
      <ProfileInfo />
    </GithubProvider>
  );
};

export default App;
