import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import LoginForm from './pages/Login/LoginForm/LoginForm';
import LoginCreate from './pages/Login/LoginCreate/LoginCreate';
import LoginLostPassword from './pages/Login/LoginLostPassword/LoginLostPassword';
import LoginResetPassword from './pages/Login/LoginResetPassword/LoginResetPassword';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import User from './pages/User/User';
import Feed from './pages/Feed/Feed';
import UserPost from './pages/User/UserPost';
import UserStats from './pages/User/UserStats';
import Photo from './pages/Photo/Photo';

export default () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}>
            <Route path="" element={<LoginForm />} />
            <Route path="create" element={<LoginCreate />} />
            <Route path="lost" element={<LoginLostPassword />} />
            <Route path="reset" element={<LoginResetPassword />} />
          </Route>
          <Route path="/p" element={<ProtectedRoute />}>
            <Route path="conta" element={<User />}>
              <Route path="" element={<Feed />} />
              <Route path="post" element={<UserPost />} />
              <Route path="stats" element={<UserStats />} />
            </Route>
            <Route path="photo/:id" element={<Photo />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}