import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const [title, setTitle] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/p/conta/stats":
        setTitle("Estatísticas"); break;
      case "/p/conta/post":
        setTitle("Adicionar Foto"); break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}