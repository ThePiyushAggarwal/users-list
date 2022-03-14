import { useEffect, useState } from 'react'

function Table() {
  const [list, setList] = useState({})

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name')
      .then((res) => res.json())
      .then((data) => {
        setList(data)
      })
  }, [])

  const {[name]} = list.results

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
            <td>{console.log(name.first)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
