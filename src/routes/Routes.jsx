import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../features/HomePage/HomePage";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout></MainLayout>,
  children: [
   {
    index: true,
    element: <HomePage></HomePage>
   },
   {
    path: '/'
   }
  ]
  },
])