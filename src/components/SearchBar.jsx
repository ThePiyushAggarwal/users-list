function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="">
      <p>Search Here</p>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-2"
          id="search"
        />
      </form>
    </div>
  )
}

export default SearchBar
