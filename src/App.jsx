import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import MainLayout from './layouts/MainLayout';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard'
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />

        <Route path='/add-job'
          element={
            <MainLayout>
              <AddJob />
            </MainLayout>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
