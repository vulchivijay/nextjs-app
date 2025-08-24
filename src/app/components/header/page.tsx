'use client'

import { useAuth } from '@/app/hooks/auth';
import Link from 'next/link';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ThemeToggleButton } from '../common/themetogglebutton';


export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  const showSession = () => {
    if (isAuthenticated) {
      return (
        <Link href='/' onClick={logout} className='nav-link'>Sign Out</Link>
      )
    } else {
      return (
        <Link className='nav-link' href="/signin">Sign In</Link>
      )
    }
  }
  return (
    <header>
      <Navbar className="bg-body-tertiary" sticky='top' expand="lg">
        <Container>
          {!isAuthenticated ?
            <Link className='nav-link text-white' href="/">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={28}
                priority
              />
            </Link> :
            <Link className='nav-link text-white' href="/dashboard">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={28}
                priority
              />
            </Link>}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!isAuthenticated ?
                <>
                  <Link className='nav-link' href="/about">About</Link>
                  <Link className='nav-link' href="/services">Services</Link>
                  <Link className='nav-link' href="/blogs">Blogs</Link>
                  {showSession()}
                </> : showSession()}
              <ThemeToggleButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}