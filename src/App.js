import Table from './components/Table'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <h1>Users List</h1>
        <Table />
      </div>
    </ContextProvider>
  )
}

export default App
