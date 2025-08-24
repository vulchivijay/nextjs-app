'use client'

import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function UsersList() {
      const response = await fetch('/api/users', { method: 'GET' })
        .then(response => response.json())
        .then(data => setUsers(data));
    }
    UsersList();
  }, []);

  return (
    <>
      <Table striped bordered hover className="ml-2 mt-3 mr-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email address</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td></td>
              </tr>)
          })}
        </tbody>
      </Table>
    </>
  )
}