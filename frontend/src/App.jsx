import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import LoginSignup from './pages/LoginSignup';
import Search from './pages/Search';
import SpotDetails from './pages/SpotDetails';
import BookAndPay from './pages/BookAndPay';
import Confirmation from './pages/Confirmation';
import Profile from './pages/Profile';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth" element={<LoginSignup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/spot/:id" element={<SpotDetails />} />
          <Route path="/book/:id" element={<BookAndPay />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;

