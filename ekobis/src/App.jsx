import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import UrunEkle from './pages/UrunEkleme';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute'; // PrivateRoute import edildi

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* PrivateRoute ile korunan sayfa */}
        <Route
          path="/urunekle"
          element={
            <PrivateRoute>
              <UrunEkle />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
