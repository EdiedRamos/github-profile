interface License {
  spdx_id: string;
}

export interface Profile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
}

export interface Repository {
  name: string;
  description: string;
  forks_count: number;
  updated_at: string;
  license: License | null;
  stargazers_count: number;
}
