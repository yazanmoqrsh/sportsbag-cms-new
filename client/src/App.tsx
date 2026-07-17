import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
        <Route path="/products" element={
          <DashboardLayout>
            <Products />
          </DashboardLayout>
        } />
        <Route path="/orders" element={
          <DashboardLayout>
            <Orders />
          </DashboardLayout>
        } />
        <Route path="/settings" element={
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App