import { useRouteError } from "react-router-dom";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, houve um erro inesperado.</p>
    </div>
  );
}
