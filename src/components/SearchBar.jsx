function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="pt-5 mb-5">
      <p>SearchBar</p>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-2"
          id="search"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
