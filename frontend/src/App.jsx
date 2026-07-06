import React from 'react'
import { ToastProvider } from './context/ToastContext'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <ToastProvider>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ToastProvider>
  )
}

export default App
