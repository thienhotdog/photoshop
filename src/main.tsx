import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./App.style.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
