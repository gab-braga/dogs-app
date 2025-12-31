import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import useInput from '../../../hooks/useInput';
import useFetch from '../../../hooks/useFetch';
import { PASSWORD_LOST } from '../../../api/api';
import Error from '../../../components/Helper/Error/Error';

export default () => {
  const username = useInput("");
  const { error, data, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      login: username.value,
      url: window.location.href.replace("reset", "lost"),
    };
    const { url, options } = PASSWORD_LOST(body);
    const { json } = await request(url, options);
  }

  return (
    <div style={{ padding: "1rem 2rem 0px 1rem" }} className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      {!!data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="username" {...username} />
          <Button disabled={loading}>
            {loading ? "Enviando..." : "Enviar Email"}
          </Button>
          <Error error={error} />
        </form>
      )}
    </div>
  );
};
