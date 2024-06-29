import React from 'react'
import Table from 'react-bootstrap/Table'

function ViewUser() {
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
        <tr>
          <td>1</td>
          <td>Ashid T</td>
          <td>ashidthanikkal@gamil.com</td>
          <td>9207177696</td>
          <td>1234567890123456</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default ViewUser
