import { Link } from "react-router-dom";
import styles from "./PhotoContent.module.css"
import PhotoComments from "./PhotoComments";
import Image from "../../components/Helper/Image/Image";

export default ({ data, single = false }) => {
  const { photo, comments } = data;
  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/p/profile/${photo.author}`}>
              @{photo.author}
            </Link>
            <span className={styles.views}>
              {photo.acessos}
            </span>
          </p>
          <h1 className="title">
            <Link to={`/p/photo/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
}