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
    <Container className="my-4">
        <Row className="justify-content-md-center">
          <Col md="8">
            {posts.map(post => (
              <Card className="bg-dark text-white mb-3 mt-5" key={post.id} style={{ borderRadius: '2.31vh' }}>
                <Card.Body>
                  <Card.Title className="fw-bold text-uppercase">{post.title}</Card.Title>
                  <Card.Text className="text-start">
                    <p>{post.content}</p>
                    <h3 className="fw-bold mt-4">Comentarios:</h3>
                    <ul className="list-unstyled">
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
