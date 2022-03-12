import { useContext, useEffect } from 'react'
import Context from '../context/Context'

function Table() {
  const { getUsers, user } = useContext(Context)

  useEffect(() => {
    getUsers()
  })

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="column">#</th>
            <th scope="column">Name</th>
            <th scope="column">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{user[0].name.first}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
