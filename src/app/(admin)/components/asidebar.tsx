'use client'

import Image from "next/image";
import Link from "next/link";
import ListGroup from 'react-bootstrap/ListGroup';

export default function Asidebar() {
  return (
    <>
      <div className="text-center py-3">
        <Link href='/dashboard'>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={28}
            priority
          />
        </Link>
      </div>
      <div>
        <span className="text-primary">-- Menu --</span>
        <ListGroup variant="flush">
          <ListGroup.Item><Link href='/users' className="nav-link">Users</Link></ListGroup.Item>
          <ListGroup.Item><Link href='/posts' className="nav-link">Posts</Link></ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}