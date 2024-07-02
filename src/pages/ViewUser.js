import React from 'react'
import Table from 'react-bootstrap/Table'

function ViewUser({user}) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Licence No</th>
          </tr>
        </thead>
        <tbody>
      {
      user?.length > 0 ?
        user.map((i,index) => (
          <tr>
            <td>{index+1}</td>
            <td>{i.username}</td>
            <td>{i.email}</td>
            <td>{i.phone?i.phone:"--"}</td>
            <td>{i.licence?i.phone:"--"}</td>
          </tr>
          ))
          :
          <h2>No users found</h2>
          }

        </tbody>
      </Table>
    </div>
  )
}

export default ViewUser
