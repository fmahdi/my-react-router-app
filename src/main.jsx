import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Laptops from './components/Laptops/Laptops.jsx'
import User from './components/User1/User.jsx'
import User2 from './components/User2/User2.jsx'

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter(
  [
    {
      path:'/',
      Component: Root,
      children: [
        {index:true, Component: Home},
        {path:'/mobiles', Component: Mobiles},
        {path:'/laptops', Component: Laptops},
        {path:'/user',
          loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
          Component: User},
        {path:'/user2',
          element: <Suspense fallback={<span>......Loading......</span>}>
            <User2 userPromise = {userPromise} ></User2>
          </Suspense>
        },
        {path:'/viteApp', Component:App}
      ]
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
