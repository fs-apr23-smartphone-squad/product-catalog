import { useRef, useState } from 'react';
import './Search.scss';

/* eslint-disable */
interface Props {
  setAppliedQuery: (query: string) => void;
}

export const Search: React.FC<Props> = ({ setAppliedQuery }) => {
  const [query, setQuery] = useState('');
  const timerId = useRef(0);

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setAppliedQuery(event.target.value);
    }, 1000);
  };

  const handleClear = () => {
    setQuery('');
    setAppliedQuery('');
  }

  return (
    <div className="search">
      <label htmlFor="search-query" className="search__label">
        Search phone
      </label>

      <div className="search__control">
        <input
          type="text"
          id="search-query"
          className="search__input"
          placeholder="Type search word"
          value={query}
          onChange={handleSearchChange}
        />
        <div className="search__clear" onClick={handleClear}></div>
      </div>
    </div>
  );
};
