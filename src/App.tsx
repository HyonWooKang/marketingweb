import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PATH from "./constants/pagePath.json";
import Home from "./pages/Home";
import Test from "./pages/Test";

interface IRoute {
  path: string;
  component: () => JSX.Element;
}

interface IPages {
  main: IRoute[];
  board: IRoute[];
}

const PAGES: IPages = {
  main: [
    { path: PATH.root, component: Home },
    { path: PATH.test, component: Test },
  ],
  board: [],
};

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PAGES.main.map((item, index) => (
        <Route
          key={`main-board-${index}`}
          path={item.path}
          element={<item.component />}
        />
      ))}
      )
    </>
  )
);

export default App;
