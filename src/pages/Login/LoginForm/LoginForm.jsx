import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../../api/api.config';

async function login(credential) {
  const response = await fetch(`${apiConfig.baseUrl}/json/jwt-auth/v1/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credential),
  });
  return await response.json();
}

export default () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      username,
      password,
    };
    const json = await login(formData);
    console.log(json);
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
