import { FaSort } from 'react-icons/fa'
import { AiOutlineCheckCircle } from 'react-icons/ai'

function TableHead({ sorting }) {
  return (
    <thead>
      <tr>
        <th scope="column">
          <AiOutlineCheckCircle />
        </th>
        <th scope="column" onClick={() => sorting('first_name')}>
          Name
          <FaSort />
        </th>
        <th scope="column" onClick={() => sorting('gender')}>
          Gender
          <FaSort />
        </th>
        <th scope="column" onClick={() => sorting('dateofbirth')}>
          DOB
          <FaSort />
        </th>
        <th scope="column" onClick={() => sorting('email')}>
          Email
          <FaSort />
        </th>
      </tr>
    </thead>
  )
}

export default TableHead
