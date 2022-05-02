import TableBody from './TableBody'
import TableHead from './TableHead'

function Table({ searchTerm, sorting, modifyList, filteredList }) {
  return (
    <div>
      <table className="table mb-5">
        <TableHead sorting={sorting} />
        <TableBody
          filteredList={filteredList}
          modifyList={modifyList}
          searchTerm={searchTerm}
        />
      </table>
    </div>
  )
}

export default Table
