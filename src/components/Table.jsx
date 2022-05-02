import { useEffect, useState } from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

function Table() {
  const [filteredList, setFilteredList] = useState([])
  const [order, setOrder] = useState('ASC')

  // This gets the data when the app runs for the first time
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10&noinfo&')
      .then((res) => res.json())
      .then((data) => {
        // Getting the data in a less sophisticated array
        // This will ensure the simplification of sorting function
        const x = data.results.map((item) => {
          return {
            first_name: item.name.first,
            last_name: item.name.last,
            gender: item.gender,
            dateofbirth: item.dob.date,
            email: item.email,
            picture: item.picture.thumbnail,
          }
        })
        console.log(x)
        setFilteredList(x)
      })
  }, [])

  // This sorts the table data and makes it re-render on screen
  // I am not able to write this on my own yet
  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...filteredList].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      )
      setFilteredList(sorted)
      setOrder('DSC')
    } else {
      const sorted = [...filteredList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      )
      setFilteredList(sorted)
      setOrder('ASC')
    }
  }

  return (
    <div>
      <table className="table">
        <TableHead sorting={sorting} />
        <TableBody filteredList={filteredList} />
      </table>
    </div>
  )
}

export default Table
