import React, { useEffect, useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import useInput from '../../../hooks/useInput';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_RESET } from '../../../api/api';
import Error from '../../../components/Helper/Error/Error';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useInput("");
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      key, login,
      password: password.value,
    };
    const { url, options } = PASSWORD_RESET(body);
    const { response } = await request(url, options);
    if (response.ok) navigate("/login");
  }


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <div style={{ padding: "1rem 2rem 0px 1rem" }} className="animeLeft">
      <h1 className="title">Resetar Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button disabled={loading}>
          {loading ? "Resetando..." : "Resetar"}
        </Button>
        <Error error={error} />
      </form>
    </div>
  );
};
