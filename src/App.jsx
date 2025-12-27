import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          } />

        <Route path='/login'
          element={
            <PublicRoute>
              <MainLayout>
                <Login />
              </MainLayout>
            </PublicRoute>
          } />

        <Route path='/register'
          element={
            <PublicRoute>
              <MainLayout>
                <Register />
              </MainLayout>
            </PublicRoute>
          } />

        <Route path='/dashboard'
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          } />

        <Route path='/add-job'
          element={
            <ProtectedRoute>
              <MainLayout>
                <AddJob />
              </MainLayout>
            </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
