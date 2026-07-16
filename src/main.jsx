import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import FriendProvider from './context/FriendContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
   <RouterProvider router={router}></RouterProvider>
    </FriendProvider>
  </StrictMode>,
)
