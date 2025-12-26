import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default () => {
    const { loading, logged } = useAuth();

    if (loading) return <p>Carregando...</p>;

    if (!logged) return <Navigate to="/login" /> 

    return <Outlet />
}