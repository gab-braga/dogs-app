import styles from "./UserPhotoPost.module.css";
import Input from "../../components/Input/Input";
import useInput from "../../hooks/useInput";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTO_POST } from "../../api/api";
import Error from "../../components/Helper/Error/Error";
import { useNavigate } from "react-router-dom";

export default () => {
  const nome = useInput("");
  const peso = useInput("");
  const idade = useInput("");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  useEffect(() => {
    if (!!data) navigate("/p/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.buttonFile}
          type="file"
          name="img"
          onChange={handleImgChange}
        />
        <Button disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </Button>
        <Error error={error} />
      </form>

      <div>
        {!!img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
}