import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import useInput from '../../../hooks/useInput';
import { useAuth } from '../../../context/AuthContext';

export default () => {
  const { loadding, error, login } = useAuth();
  const username = useInput('', { required: true });
  const password = useInput('', { required: true });

  async function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      const formData = {
        username: username.value,
        password: password.value,
      };
      await login(formData);
    }
  }

  function isFormValid() {
    const inputs = [username, password];
    const validation = inputs.reduce(
      (value, input) => value && input.validate(),
      true,
    );
    return validation;
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input name="username" label="Usuário" type="text" {...username} />
        <Input name="password" label="Senha" type="password" {...password} />
        {loadding ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/create">Cadastrar</Link>
    </section>
  );
};
