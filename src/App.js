import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/home/services/Services";
import Map from "./components/map/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map",
    element: <Map />,
  },
  {
    path: "/services/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  const imie = "tomasz";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
