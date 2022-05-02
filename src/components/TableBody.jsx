import { AiFillCheckCircle } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function TableBody({ filteredList, modifyList, searchTerm }) {
  // Converting date to readable format
  const time = (d) => {
    let date = new Date(d)
    return date.toLocaleDateString(undefined, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
    })
  }

  return (
    <tbody>
      {filteredList &&
        filteredList
          .filter((item) => {
            if (searchTerm === '') {
              return item
            } else if (
              (item.first_name + ' ' + item.last_name)
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return item
            } else if (
              item.gender.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true
            } else if (
              time(item.dateofbirth)
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return true
            } else if (
              item.email.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true
            }
            return false
          })
          .map((item) => (
            <tr
              key={item.dateofbirth}
              onClick={() => modifyList(item.dateofbirth)}
            >
              <th scope="row">
                {!item.checked ? (
                  <AiOutlineCheckCircle style={{ fontSize: '25px' }} />
                ) : (
                  <AiFillCheckCircle
                    style={{ fontSize: '25px', color: 'dodgerblue' }}
                  />
                )}
              </th>
              <td>
                {item.first_name} {item.last_name}
              </td>
              <td>{item.gender}</td>
              <td>{time(item.dateofbirth)}</td>
              <td>{item.email}</td>
            </tr>
          ))}
    </tbody>
  )
}

export default TableBody
