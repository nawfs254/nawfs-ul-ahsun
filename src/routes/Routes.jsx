import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Webdev from "../components/Webdev";
import Music from "../components/Music";
import Softwares from "../components/Softwares";
import Qualification from "../pages/Qualification";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
        children: [
          {
            path:"/skills",
            element: <Webdev></Webdev>
          },
          {
            path:"/skills/webdev",
            element: <Webdev></Webdev>
          },
          {
            path:"/skills/music",
            element: <Music></Music>
          },
          {
            path:"/skills/software",
            element: <Softwares></Softwares>
          }
        ]
      },
      {
        path: "/qualification",
        element: <Qualification></Qualification>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      }
    ],
  },
]);
