'use client'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from "@/app/hooks/auth"
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { ThemeToggleButton } from '@/app/components/common/themetogglebutton';

export default function DashboardHeader() {

  const { loggedin, logout } = useAuth();

  return (
    <Navbar sticky='top' expand='lg'>
      <Container>
        <Navbar.Brand href="/dashboard">
          <Button variant='light'>
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ThemeToggleButton />
          <Navbar.Text>
            <div className='d-flex px-2'>Signed in as: <b className='px-2'>{loggedin}</b></div>
          </Navbar.Text>
          <Link href='/' onClick={logout} className='nav-link'>Sign out</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}