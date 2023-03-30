import { createBrowserRouter } from "react-router-dom";
import DependentQueries from "../components/DependentQueries";
import DynamicParallel from "../components/DynamicParallel";
import HomePage from "../components/HomePage";
import InfiniteQueries from "../components/InfiniteQueries";
import Main from "../components/Layout/Main";
import PaginatedQueries from "../components/PaginatedQueries";
import ParallelQueries from "../components/ParallelQueries";
import RQSuperHero from "../components/RQSuperHero";
import RQSuperHeroesPage from "../components/RQSuperHeroesPage";
import SuperHeroesPage from "../components/SuperHeroesPage";

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
      },
      {
        path: '/rq-dynamic-parallel',
        element: <DynamicParallel heroIds={[1,3]}></DynamicParallel>
      },
      {
        path: '/rq-dependent',
        element: <DependentQueries email='rakib@example.com'></DependentQueries>
      },
      {
        path: '/rq-paginated',
        element: <PaginatedQueries></PaginatedQueries>
      },
      {
        path: '/rq-infinite',
        element: <InfiniteQueries></InfiniteQueries>
      }
    ]
   }
   ])

   export default router;