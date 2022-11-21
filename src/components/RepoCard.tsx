import { Component } from "solid-js";
import { saved, setSaved } from "../pages/SavedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const save = (repo: Repo) => {
  setSaved((old) => [...old, repo]);

  localStorage.setItem("savedRepos", JSON.stringify(saved()));
};

const remove = (id: string) => {
  setSaved((old) => old.filter((repo) => repo.id !== id));

  localStorage.setItem("savedRepos", JSON.stringify(saved()));
};

const isSaved = (id: string) => {
  return saved().findIndex((repo) => repo.id === id) !== -1;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card mb-2">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{repo.owner.login}</strong>/{repo.name}
        </a>
        <p class="card-text">{repo.description}</p>
        {isSaved(repo.id) ? (
          <button class="btn btn-danger mx-1" onclick={() => remove(repo.id)}>
            Remove
          </button>
        ) : (
          <button class="btn btn-success" onclick={() => save(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
