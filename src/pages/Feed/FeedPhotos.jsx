import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotoItem from "./FeedPhotoItem";
import { PHOTOS_GET } from "../../api/api";
import Loading from "../../components/Helper/Loading/Loading";
import styles from "./FeedPhotos.module.css";

export default ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, user, total });
      const { response, json } = await request(url, options);
      if (response && response.ok && Array.isArray(json) && json.length < total)
        setInfinite(false);
    }
    fetchPhotos();
  }, [page, user, request, setInfinite]);

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