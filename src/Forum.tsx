import { useState } from 'react';
import CommentForm from './CommentForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, url: 'react.svg', title: 'Post 1', content: 'Contenido del post 1', comments: [] },
    { id: 2, url: 'react.svg', title: 'Post 2', content: 'Contenido del post 2', comments: [] },
  ]);

  const handleAddComment = (postId: number, comment: string) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, comment],
          };
        }
        return post;
      });
    });
  };

  return (
    <div>
      <h1>Foro</h1>
      {posts.map(post => (
        <Card style={{ width: '18rem' }} key={post.id}>
          <Card.Img variant="top" src='../assets/images/${post.url}' />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              <p>{post.content}</p>
              <h3>Comentarios:</h3>
              <ul>
                {post.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
              <CommentForm postId={post.id} onAddComment={handleAddComment} />
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>

  );
};


export default Forum;