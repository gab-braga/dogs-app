import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./UserHeaderNav.module.css";
import Feed from '../../assets/feed.svg?react';
import Stats from '../../assets/estatisticas.svg?react';
import Post from '../../assets/adicionar.svg?react';
import Logout from '../../assets/sair.svg?react';
import { useState } from "react";

export default () => {
    const { logout } = useAuth();
    const [mobile, setMobile] = useState(null);

    return (
        <nav className={styles.nav}>
            <NavLink end to="/p/conta">
                <Feed /> {!!mobile && "Feed"}
            </NavLink>
            <NavLink to="/p/conta/stats">
                <Stats /> {!!mobile && "Estatísticas"}
            </NavLink>
            <NavLink to="/p/conta/post">
                <Post /> {!!mobile && "Adicionar Foto"}
            </NavLink>
            <button onClick={logout}>
                <Logout /> {!!mobile && "Sair"}
            </button>
        </nav>
    );
}