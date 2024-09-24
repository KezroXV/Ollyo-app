import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AboutPage from './Pages/AboutPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactPage from './Pages/ContactPage.jsx';
import BrandsPage from './Pages/BrandsPage.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import CareersPage from './Pages/CareersPage.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Brands",
    element: <BrandsPage />,
  },
  {
    path: "About",
    element: <AboutPage />,
  },
  {
    path: "Blog",
    element: <BlogPage />,
  },
  {
    path: "Contact",
    element: <ContactPage />,
  },
  {
    path: "Careers",
    element: <CareersPage />,
  },
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </StrictMode>,
);
