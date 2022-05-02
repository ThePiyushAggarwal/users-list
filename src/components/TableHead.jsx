import { FaSort } from 'react-icons/fa'

function TableHead({ sorting }) {
  return (
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
