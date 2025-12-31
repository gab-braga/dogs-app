import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import { PHOTO_GET } from "../../api/api";
import Error from "../../components/Helper/Error/Error";
import Loading from "../../components/Helper/Loading/Loading";
import PhotoContent from "./PhotoContent";
import styles from "./Photo.module.css"

export default () => {
  const { id } = useParams();
  const { error, data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section
      className="container"
      style={{ marginTop: "4rem" }}
    >
      <PhotoContent data={data} single />
    </section>
  );
}