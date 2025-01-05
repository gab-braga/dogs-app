import React from 'react';
import { Link } from 'react-router-dom';
import apiConfig from '../../../api/api.config';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import useInput from '../../../hookes/useInput';

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
  const username = useInput('', { required: true });
  const password = useInput('', { required: true });

  async function handleSubmit(event) {
    event.preventDefault();
    const inputs = [username, password];
    const validation = inputs.reduce(
      (value, input) => value && input.validate(),
      true,
    );
    if (validation) {
      const formData = {
        username: username.value,
        password: password.value,
      };
      const json = await login(formData);
      console.log(formData);
      console.log(json);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
