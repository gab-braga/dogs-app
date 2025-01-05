import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../../api/api.config';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

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
        <Input
          name="username"
          label="Usuário"
          type="text"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
