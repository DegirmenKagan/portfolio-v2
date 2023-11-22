import { useState, useEffect } from "react";
import axios from "axios";
import { IGitRepo } from "./HooksData";

const useGitRepos = (username: string) => {
  const [repos, setRepos] = useState<IGitRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10&order=desc`
        );
        console.log(response.data.map((repo: IGitRepo) => repo));
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading };
};

export default useGitRepos;
