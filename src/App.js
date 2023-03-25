import { BrowserRouter as Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Main from './components/Layout/Main'
import RQSuperHeroesPage from './components/RQSuperHeroesPage'
import SuperHeroesPage from './components/SuperHeroesPage'

function App() {
 const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <HomePage></HomePage>
    },
    {
      path: '/rq-super-heroes',
      element: <SuperHeroesPage></SuperHeroesPage>
    },
    {
      path: '/',
      element: <RQSuperHeroesPage></RQSuperHeroesPage>
    }
  ]
 }
 ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  )
}

export default App;
