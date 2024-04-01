import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { CartProvaider } from "./contexts/useCartProvaider.tsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvaider>
      <RouterProvider router={Router} />
    </CartProvaider>
  </React.StrictMode>,
)
