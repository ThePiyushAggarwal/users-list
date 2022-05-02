import { AiFillCheckCircle } from 'react-icons/ai'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function TableBody({ filteredList, modifyList }) {
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
        filteredList.map((item) => (
          <tr
            key={item.dateofbirth}
            onClick={() => modifyList(item.dateofbirth)}
          >
            <th scope="row">
              {item.checked ? <AiOutlineCheckCircle /> : <AiFillCheckCircle />}
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
