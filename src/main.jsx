import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TaskContextProvider } from './contexts/TaskContext'
import { AuthContextProvider } from './contexts/AuthContext'
import {RecoilRoot} from "recoil"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
      <AuthContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
