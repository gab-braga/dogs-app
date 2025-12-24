import React from "react";
import styles from "./LoginCreate.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import useInput from "../../../hooks/useInput";
import { USER_DATA_POST } from "../../../api/api";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";
import Error from "../../../components/Helper/Error/Error";

export default () => {
  const username = useInput("", { required: true });
  const email = useInput("", { required: true });
  const password = useInput("", { required: true });
  const { request, loading, error } = useFetch();
  const { login } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      const { url, options } = USER_DATA_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        await login(username.value, password.value);
      }
    }
  }

  function isFormValid() {
    const inputs = [username, email, password];
    const validation = inputs.reduce(
      (value, input) => value && input.validate(),
      true
    );
    return validation;
  }

  return (
    <section className="animeLeft">
      <div className={styles.form}>
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="E-mail" type="email" name="email" {...email} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
          <Error error={error} />
        </form>
      </div>
    </section>
  );
};
