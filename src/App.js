import Table from './components/Table'
import { useState } from 'react'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="container">
      <h1>Users List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table searchTerm={searchTerm} />
    </div>
  )
}

export default App
