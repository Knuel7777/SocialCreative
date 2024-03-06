import { useState } from 'react';
import CommentForm from './CommentForm';
import { Card, Container, Row, Col } from 'react-bootstrap'



const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'Tarea 1', comments: ["Gracias Profe"] },
    { id: 2, title: 'Post 2', content: 'Contenido del post 2', comments: [] },
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
    <>
    <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
            <h1 className="text-center">Foro</h1>
            {posts.map(post => (
              <Card className="mb-3" key={post.id}>
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
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default Forum;