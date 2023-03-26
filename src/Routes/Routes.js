import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Main from "../components/Layout/Main";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";
import SuperHeroesPage from "../components/SuperHeroesPage";
import Test from "../components/Test";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/super-heroes',
        element: <SuperHeroesPage></SuperHeroesPage>
      },
      {
        path: '/rq-super-heroes',
        element: <RQSuperHeroesPage></RQSuperHeroesPage>
      },
      {
        path: '/test',
        element: <Test></Test>
      }
    ]
   }
   ])

   export default router;