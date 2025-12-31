import Image from "../../components/Helper/Image/Image";
import styles from "./FeedPhotoItem.module.css";

export default ({ photo, setModalPhoto }) => {
  return (
    <li className={styles.photo} onClick={() => setModalPhoto(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
}