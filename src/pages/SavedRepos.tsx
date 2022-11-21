import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../components/RepoCard";

const localRepo = JSON.parse(localStorage.getItem("savedRepos") ?? "[]");

const [saved, setSaved] = createSignal<Repo[]>(localRepo);

export { saved, setSaved };

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={saved()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default SavedRepos;
