import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./UserHeaderNav.module.css";
import Feed from '../../assets/feed.svg?react';
import Stats from '../../assets/estatisticas.svg?react';
import Post from '../../assets/adicionar.svg?react';
import Logout from '../../assets/sair.svg?react';
import useMedia from "../../hooks/useMedia";
import { useEffect, useState } from "react";

export default () => {
  const { logout } = useAuth();
  const mobile = useMedia("(max-width: 40rem)");
  const [openMenu, setOpenMenu] = useState(false);

  const {pathname} = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <>
      {!!mobile && (
        <button
          aria-label="Menu"
          onClick={() => setOpenMenu(!openMenu)}
          className={`${styles.buttonMobile} ${openMenu && styles.buttonMobileActive}`}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${openMenu && styles.navMobileActive}`}>
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
    </>
  );
}