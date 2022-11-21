import { Component, For } from "solid-js";
import { repos, setUsername, username } from "../App";
import RepoCard, { Repo } from "../components/RepoCard";

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();

    const input = document.querySelector("#usernameInput") as HTMLInputElement;

    setUsername(input.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={refetchWithUsername}>
        <input type="text" class="p-1" id="usernameInput" required />
        <button class="btn btn-dark ms-3">Submit</button>
      </form>
      <h2>GitHub repos from {username}</h2>
      <For each={repos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export default Home;
