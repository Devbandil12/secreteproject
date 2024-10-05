
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import {Provider} from "react-redux"

import store from '../store/store.js';
import './index.css'
import Marketplace from './components/Marketplace.jsx';
import Profile from './components/Profile.jsx';
import Cart from './components/Cart.jsx';
import Registerform from './components/Registerform.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import Shop from './components/Shop.jsx';
import Notification from './components/Notification.jsx';
import { io } from 'socket.io-client';





const route=createBrowserRouter([







  {
    path:"/",
    element:<Home/>,
  },
    
  {
    path:"/getstarted",
    element:<Registerform/>
  }
  ,
  {
    path:"/Marketplace",
    element:<Marketplace/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
  ,
  {
    path:"/admin/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path:"notification",
    element:<Notification/>
  }
])


createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  

     <RouterProvider router={route} />
   

  </Provider>
)
