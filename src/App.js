import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Statics from './Statics/Statics';
import Quiz from './component/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'statics',
          element: <Statics></Statics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/:id',
          element: <Quiz></Quiz>,
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)

          }
        },

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
