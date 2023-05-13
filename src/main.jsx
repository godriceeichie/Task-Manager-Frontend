import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TaskContextProvider } from './contexts/TaskContext'
import { AuthContextProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <TaskContextProvider>
          <App />
        </TaskContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
