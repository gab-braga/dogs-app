import React from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import useInput from "../../../hooks/useInput";
import { useAuth } from "../../../context/AuthContext";
import Error from "../../../components/Helper/Error/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../../components/Button/Button.module.css";

export default () => {
  const { loadding, error, login } = useAuth();
  const username = useInput("", { required: true });
  const password = useInput("", { required: true });

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
      true
    );
    return validation;
  }

  return (
    <section className="animeLeft">
      <div className={styles.form}>
        <h1 className="title">Login</h1>

        <form onSubmit={handleSubmit}>
          <Input name="username" label="Usuário" type="text" {...username} />
          <Input name="password" label="Senha" type="password" {...password} />
          {loadding ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          {<Error error={error} />}
        </form>

        <Link className={styles.perdeu} to="/login/reset">
          Perdeu a Senha?
        </Link>

        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to="/login/create">
            Cadastrar
          </Link>
        </div>
      </div>
    </section>
  );
};
