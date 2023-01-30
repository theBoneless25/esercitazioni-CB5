import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>SPIAZE</h1>
      <p>Mi dispiace ma è esploso tutto!!!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
