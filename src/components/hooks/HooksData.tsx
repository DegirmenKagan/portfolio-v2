export type IGitRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  watchers_count: number;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};
