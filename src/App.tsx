import { experimental_use as use } from "react";

import "./App.css";

const getGps = new Promise((resolve) => {
  resolve("resolved");
});

function Gps() {
  const data = use(getGps);
  return <>{data}</>;
}

export function App() {
  return <Gps />;
}
