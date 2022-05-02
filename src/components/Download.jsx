import { CSVLink } from 'react-csv'
import { useState } from 'react'

function Download({ finalSelectedData }) {
  const [filename, setFilename] = useState('data')

  const headers = [
    { label: 'First Name', key: 'first_name' },
    { label: 'Last Name', key: 'last_name' },
    { label: 'Gender', key: 'gender' },
    { label: 'Date Of Birth', key: 'dateofbirth' },
    { label: 'Email', key: 'email' },
  ]

  const csvReport = {
    data: finalSelectedData,
    headers: headers,
    filename: filename + '.csv',
  }
  return (
    <div>
      <p>Select data to download and</p>
      <p>Set File name before downloading:</p>
      <div className="d-flex">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="form-control"
        />
        <CSVLink {...csvReport}>
          <button className="btn btn-primary">Download File</button>
        </CSVLink>
      </div>
    </div>
  )
}

export default Download
