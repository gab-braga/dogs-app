import { Outlet } from "react-router-dom";
import UserHeader from "./UserHeader";
import styles from "./User.module.css";

export default () => {
  return (
    <section className="container">
      <UserHeader />
      <Outlet />
    </section>
  );
}