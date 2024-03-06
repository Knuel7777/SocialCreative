import { useState } from 'react';


const CommentForm = ({ postId, onAddComment }) => {
    const [comment, setComment] = useState('');
  
    const handleAddComment = () => {
      if (comment.trim() !== '') {
        onAddComment(postId, comment);
        setComment('');
      }
    };
  
    return (
      <section>
        <input
          type="text"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Añade un comentario"
        />
        <button onClick={handleAddComment}>Agregar Comentario</button>
      </section>
    );
  };
  
  export default CommentForm;
