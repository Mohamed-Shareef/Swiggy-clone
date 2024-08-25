import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Restaurantmenu from "./components/restaurentmenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:resId",
        element: <Restaurantmenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback="Loadings...">
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
