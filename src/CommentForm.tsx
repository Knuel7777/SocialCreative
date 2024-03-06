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
  <div className="input-group">
    <input
      type="text"
      value={comment}
      onChange={e => setComment(e.target.value)}
      className="form-control form-control-lg"
      placeholder="Añade un comentario"
      style={{ borderRadius: '25px 0 0 25px' }}
    />
    <button onClick={handleAddComment}
      className="btn btn-outline-light btn-lg"
      type="button"
      style={{ borderRadius: '0 25px 25px 0' }}>Agregar Comentario</button> 
  </div>
</section>

    );
  };
  
  export default CommentForm;
