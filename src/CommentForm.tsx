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
<section className="mb-3 d-grid gap-2">
  <section className="input-group">
    <input
      type="text"
      value={comment}
      onChange={e => setComment(e.target.value)}
      className="form-control form-control-lg"
      placeholder="Añade un comentario"
      style={{ borderRadius: '2.31vh 0 0 2.31vh' }}
    />
    <button onClick={handleAddComment}
      className="btn btn-outline-light btn-lg"
      type="button"
      style={{ borderRadius: '0 2.31vh 2.31vh 0' }}>Agregar Comentario</button> 
  </section>
</section>

    );
  };
  
  export default CommentForm;
