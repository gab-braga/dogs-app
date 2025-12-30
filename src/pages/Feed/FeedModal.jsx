import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./FeedModal.module.css";
import { PHOTO_GET } from "../../api/api";
import Error from "../../components/Helper/Error/Error";
import Loading from "../../components/Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

export default ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div
    className={styles.modal}
    onClick={handleOutsideClick}
    >
      <Error error={error} />
      {loading && <Loading />}
      {!!data && <PhotoContent data={data} />}
    </div>
  );
}