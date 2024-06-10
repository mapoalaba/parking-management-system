import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // 기본 내보내기
import RegisterPage from './pages/RegisterPage'; // 기본 내보내기
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // 기본 내보내기
import EmailVerificationPage from './pages/EmailVerificationPage'; // 기본 내보내기
import PhoneVerificationPage from './pages/PhoneVerificationPage'; // 기본 내보내기
import HomePage from './pages/HomePage'; // 기본 내보내기
import VillaPage from './pages/VillaPage'; // 기본 내보내기
import ParkingPage from './pages/ParkingPage'; // 기본 내보내기
import UserProfilePage from './pages/UserProfilePage'; // 기본 내보내기
import AdminPage from './pages/AdminPage'; // 기본 내보내기
import MyVillasPage from './pages/MyVillasPage'; // 기본 내보내기
import VillaEntryPage from './pages/VillaEntryPage'; // 기본 내보내기
import RegisterVillaPage from './pages/RegisterVillaPage'; // 기본 내보내기
import VillasListPage from './pages/VillasListPage'; // 기본 내보내기
import UsersListPage from './pages/UsersListPage'; // 기본 내보내기
import VillaDetailsPage from './pages/VillaDetailsPage'; // 기본 내보내기
import UserDetailsPage from './pages/UserDetailsPage'; // 기본 내보내기
import PrivateRoute from './utils/PrivateRoute'; // 기본 내보내기

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
        <Route path="/phone-verification" element={<PhoneVerificationPage />} />
        <Route path="/home" component={HomePage} />
        <Route path="/villa" element={<PrivateRoute><VillaPage /></PrivateRoute>} />
        <Route path="/parking" element={<PrivateRoute><ParkingPage /></PrivateRoute>} />
        <Route path="/user-profile" element={<PrivateRoute><UserProfilePage /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
        <Route path="/my-villas" element={<PrivateRoute><MyVillasPage /></PrivateRoute>} />
        <Route path="/villa-entry" element={<PrivateRoute><VillaEntryPage /></PrivateRoute>} />
        <Route path="/register-villa" element={<PrivateRoute><RegisterVillaPage /></PrivateRoute>} />
        <Route path="/villas-list" element={<PrivateRoute><VillasListPage /></PrivateRoute>} />
        <Route path="/users-list" element={<PrivateRoute><UsersListPage /></PrivateRoute>} />
        <Route path="/villa-details" element={<PrivateRoute><VillaDetailsPage /></PrivateRoute>} />
        <Route path="/user-details" element={<PrivateRoute><UserDetailsPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
