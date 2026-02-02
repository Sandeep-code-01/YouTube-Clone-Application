import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/Watch",
        element: <WatchPage />,
      },

    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Header />
          <RouterProvider router={appRouter} />
          
          </div>
    </Provider>
  );
}

export default App;
