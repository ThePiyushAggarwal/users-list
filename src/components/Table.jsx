import { useEffect, useState } from 'react'

function Table() {
  const [list, setList] = useState()

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10&exc=login&noinfo')
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
  }, [])

  // converting date to readable format
  const time = (d) => {
    let date = new Date(d)
    return date.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    })
  }

  list && console.log(list)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
            </th>
            <th scope="column">Name</th>
            <th scope="column">Gender</th>
            <th scope="column">DOB</th>
            <th scope="column">Email</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => (
              <tr key={index}>
                <th scope="row">
                  <form>
                    <input type="checkbox" />
                  </form>
                </th>
                <td>
                  {item.name.first} {item.name.last}
                </td>
                <td>{item.gender}</td>
                <td>{time(item.dob.date)}</td>
                <td>{item.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
