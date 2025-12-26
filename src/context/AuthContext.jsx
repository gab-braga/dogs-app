import React from 'react';
import {
  LOGIN_USER_POST,
  TOKEN_VALIDATE_POST,
  USER_DATA_GET,
} from '../api/api';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [logged, setLogged] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function loadUser() {
    setLoading(true);
    const token = window.localStorage.getItem('token');
    if (token) {
      setError(null);
      try {
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error('Token inválido.');
        await getUser(token);
      } catch (error) {
        console.error(error);
        logout();
      } finally {
        setLoading(false);
      }
    } else setLoading(false);
  }

  async function login(credentials) {
    setError(null);
    setLoading(true);
    try {
      const { url, options } = LOGIN_USER_POST(credentials);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setLogged(false);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setUser(null);
    setError(null);
    setLoading(false);
    setLogged(false);
    window.localStorage.removeItem('token');
  }

  async function getUser(token) {
    const { url, options } = USER_DATA_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUser(json);
    setLogged(true);
  }

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logged, error, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}
