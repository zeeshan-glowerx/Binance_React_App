export default function swDev() {
  let swDev = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(swDev)
      .then((result) => {
        // console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}
