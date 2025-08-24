'use client'

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";


export default function SignUpForm() {
  const [error, setError] = useState<string>();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name")
    }
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    }).then(response => response.json()).then(data => console.log(data));

    ref.current?.reset();

    if (response?.error) {
      setError(response.error);
      return;
    } else {
      router.push("/signin");
    }
  };

  return (
    <Container className="h-100">
      <Row className="h-100 align-items-top py-4">
        <Col><Link href='/'>Back to Home</Link></Col>
        <Col>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Form ref={ref} action={handleSubmit}>
                <div className='text-center py-2'>
                  <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={58}
                    priority
                  />
                </div>
                <Row className="pb-2">
                  <Form.Label>Full Name:</Form.Label>
                  <Col>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" />
                  </Col>
                </Row>
                <Row className="pb-2">
                  <Form.Label>Email:</Form.Label>
                  <Col>
                    <Form.Control type="email" name='email' placeholder="Enter Email Address" />
                  </Col>
                </Row>
                <Row className="pb-2">
                  <Form.Label>Password:</Form.Label>
                  <Col>
                    <Form.Control type="password" name='password' placeholder="Enter Password" />
                  </Col>
                </Row>
                <div className="d-grid gap-2 pb-2">
                  <Button variant="primary" type='submit'>Sign up</Button>
                </div>
                {error && <p className="text-error">{error}</p>}
                <div className="text-center pt-3"><Link href="/signin">Already have an account?</Link></div>
              </Form>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
