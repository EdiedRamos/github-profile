import { createContext } from "react";

interface GithubContext {}

export const GithubContext = createContext<GithubContext | null>(null);
