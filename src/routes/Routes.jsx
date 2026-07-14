import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../features/HomePage/HomePage";
import ErrorPage from "../features/errorPage/ErrorPage";
import FriendDetails from "../features/pages/FriendDetails";

export const router = createBrowserRouter([
  {
  path: '/',
  element: <MainLayout></MainLayout>,
  children: [
   {
    index: true,
    element: <HomePage></HomePage>
   },
   {
    path: '/friendDetails/:id',
    element: <FriendDetails></FriendDetails>
   }
  ],
  errorElement: <ErrorPage></ErrorPage>
  },
])