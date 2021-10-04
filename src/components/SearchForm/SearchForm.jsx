import './SearchForm.css';

export default function SearchForm({ handleSubmit, handleSetQuery, query }) {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="query"
          value={query}
          type="text"
          onChange={handleSetQuery}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
