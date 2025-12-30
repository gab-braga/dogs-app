import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import PhotoCommentForm from "./PhotoCommentForm";
import styles from "./PhotoComments.module.css"

export default (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsArea = useRef(null);
  const { logged } = useAuth();

  useEffect(() => {
    commentsArea.current.scrollTop = commentsArea.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsArea} className={styles.comments}>
        {comments.map(comment => (
          <li key={comment.commentId}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {logged && (
        <PhotoCommentForm
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
}