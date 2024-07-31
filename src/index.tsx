import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HelmetProvider>
    <RecoilRoot>
      <RouterProvider router={App} />
    </RecoilRoot>
  </HelmetProvider>
);

reportWebVitals();
