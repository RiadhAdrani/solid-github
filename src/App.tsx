import { Component, createEffect, createSignal } from "solid-js";

import Nav from "./components/Nav";
import { Route, Routes } from "solid-app-router";
import Home from "./pages/Home";
import SavedRepos from "./pages/SavedRepos";

const [username, setUsername] = createSignal("RiadhAdrani");
const [repos, setRepos] = createSignal([]);

export { username, setUsername, repos };

createEffect(async () => {
  const res = await fetch(`https://api.github.com/users/${username()}/repos?sort=created`);
  setRepos(await res.json());
});

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved-repos" element={<SavedRepos />} />
      </Routes>
    </div>
  );
};

export default App;
