import { experimental_use as use } from "react";

const getGps = new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition((position) => {
    resolve({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
});

export function Gps() {
  const data = use(getGps);
  return <>{JSON.stringify(data)}</>;
}
