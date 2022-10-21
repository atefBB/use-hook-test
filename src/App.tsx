import { experimental_use as use, Suspense } from "react";

import { Gps } from "./Gps";

import "./App.css";

const idsFetcher = fetch("./ids.json").then((result) => result.json());

function Names() {
  const ids = use(idsFetcher);
  return <div>{JSON.stringify(ids)}</div>;
}

export function App() {
  return (
    <Suspense fallback="loading">
      <Names />
      <Gps />
    </Suspense>
  );
}
