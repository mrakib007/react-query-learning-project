import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import Main from "../components/Layout/Main";
import RQSuperHero from "../components/RQSuperHero";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";
import SuperHeroesPage from "../components/SuperHeroesPage";
import ParallelQueries from "../hoooks/ParallelQueries";
// import Test from "../components/Test";

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
      // {
      //   path: '/test',
      //   element: <Test></Test>
      // },
      {
        path: '/rq-super-heroes/:heroId',
        element: <RQSuperHero></RQSuperHero>
      },
      {
        path: '/rq-parallel',
        element: <ParallelQueries></ParallelQueries>
      }
    ]
   }
   ])

   export default router;