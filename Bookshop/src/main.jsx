
import { createRoot } from 'react-dom/client'
import Home from './components/Home.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registerpage from "./components/Registerpage";

import {Provider} from "react-redux"

import store from '../store/store.js';
import './index.css'
import Marketplace from './components/Marketplace.jsx';
import Profile from './components/Profile.jsx';
import Cart from './components/Cart.jsx';



const route=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
    
  {
    path:"/getstarted",
    element:<Registerpage/>
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
  
])


createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  

     <RouterProvider router={route} />
   

  </Provider>
)
