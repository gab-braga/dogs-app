import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotoItem from "./FeedPhotoItem";
import { PHOTOS_GET } from "../../api/api";
import Loading from "../../components/Helper/Loading";
import styles from "./FeedPhotos.module.css";

export default ({ setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 10, user: 0 });
      await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map(photo => (
        <FeedPhotoItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );

  return null;
}