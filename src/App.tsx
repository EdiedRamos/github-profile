import {
  Filter,
  FilterResult,
  Hero,
  ProfileInfo,
  Repositories,
} from "@/components";

import { GithubProvider } from "./provider/GithubProvider";

const App = () => {
  return (
    <GithubProvider>
      <Hero>
        <Filter />
        <FilterResult />
      </Hero>
      <ProfileInfo />
      <Repositories />
    </GithubProvider>
  );
};

export default App;
