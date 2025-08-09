import React, { useState } from "react";
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
import UserContex from "./utils/UserContex";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cartitem from "./components/Cartitem";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setuserName] = useState(0);

  // useEffect(() => {
  //   const Values = {
  //     name: "mohamed",
  //   };
  //   setuserName(Values.name);
  // }, []);
  return (
    <Provider store={appStore}>
      <UserContex.Provider value={{ loggedINuser: userName, setuserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContex.Provider>
    </Provider>
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
        path: "/Cartitem",
        element: <Cartitem />,
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
