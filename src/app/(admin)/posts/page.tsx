'use client'

import { useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useAuth } from "@/app/hooks/auth";

export default function Blogs() {
  const [error, setError] = useState<string>();
  const [status, setStatus] = useState<string>();
  const ref = useRef<HTMLFormElement>(null);
  const { loggedin } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function PostsList() {
      const response = await fetch('/api/posts', { method: 'GET' })
        .then(response => response.json())
        .then(data => setPosts(data));
    }
    PostsList();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    const postData = {
      title: formData.get("title"),
      body: formData.get("body"),
      author: loggedin,
    }
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then(response => response.json()).then(data => console.log(data));

    ref.current?.reset();

    if (response?.error) {
      setError(response.error);
      return;
    } else {
      setStatus("Post Created!");
    }
  };

  return (
    <>
      <h6>Create Post</h6>
      <Form ref={ref} action={handleSubmit}>
        <Row className="pb-2">
          <Form.Label>Title:</Form.Label>
          <Col>
            <Form.Control type="text" name='title' placeholder="Enter Title" />
          </Col>
        </Row>
        <Row className="pb-2">
          <Form.Label>Body:</Form.Label>
          <Col>
            <Form.Control type="text" name='body' placeholder="Enter Body" />
          </Col>
        </Row>
        <div className="d-grid gap-2 pb-2">
          <Button variant="primary" type='submit'>Create Post</Button>
        </div>
        {error && <p className="text-error">{error}</p>}
      </Form>
      {status && <p className="text-success">{status}</p>}
      <div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <small>{post.author}</small>
            </div>
          )
        })}
      </div>
    </>
  )
}