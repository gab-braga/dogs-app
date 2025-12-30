import { useState } from "react";
import Send from '../../assets/enviar.svg?react';
import useFetch from "../../hooks/useFetch";
import { COMMENT_POST } from "../../api/api";
import Error from "../../components/Helper/Error/Error";
import styles from "./PhotoCommentForm.module.css";

export default ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments(comments => [...comments, json]);
      setComment("");
    }
  }

  return (
    <div>
      <div style={{ margin: "0 1rem" }}>
        <Error error={error} />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          id="comment" name="comment"
          onChange={({ target }) => setComment(target.value)}
          placeholder="Comente..."
          className={styles.textarea}
        ></textarea>
        <button className={styles.button}>
          <Send />
        </button>
      </form>
    </div>
  );
}