import { useEffect, useState } from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import Download from './Download'

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
            checked: false,
          }
        })
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

  // this function toggles the selected data
  const modifyList = (id) => {
    setFilteredList(
      filteredList.map((item) => {
        if (item.dateofbirth === id) {
          return { ...item, checked: !item.checked }
        } else {
          return item
        }
      })
    )
  }

  // Every piece of data that is checked is added to this array
  const selectedData = filteredList.filter((item) => item.checked)

  // It convers date to readable format
  // I guess it is esssential because it needs to be exported to CSV
  const finalSelectedData = selectedData.map((item) => {
    return {
      ...item,
      dateofbirth: new Date(item.dateofbirth).toDateString(),
    }
  })

  return (
    <div>
      <table className="table">
        <TableHead sorting={sorting} />
        <TableBody filteredList={filteredList} modifyList={modifyList} />
      </table>
      <Download finalSelectedData={finalSelectedData} />
    </div>
  )
}

export default Table
