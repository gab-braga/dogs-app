import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import LoginForm from './pages/Login/LoginForm/LoginForm';
import LoginCreate from './pages/Login/LoginCreate/LoginCreate';
import LoginLostPassword from './pages/Login/LoginLostPassword/LoginLostPassword';
import LoginResetPassword from './pages/Login/LoginResetPassword/LoginResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}>
          <Route path="" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLostPassword />} />
          <Route path="reset" element={<LoginResetPassword />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
