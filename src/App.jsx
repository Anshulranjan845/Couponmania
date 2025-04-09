import './App.css';
import Body from './components/Body';
import {storesData} from "../src/data/dealStore"
import StoreDetail from './components/StoreDetail';
import Header from './components/Header';
import SignUp from './components/SignUp';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Layout component to include Header and Outlet (where child routes will be rendered)
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the matched child route */}
      
    </>
  );
};

// Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/:storeName',  
        element: <StoreDetail stores={storesData} />,
      },
      // Add more routes here as needed
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
