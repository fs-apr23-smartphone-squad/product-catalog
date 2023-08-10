import { useRef, useState } from 'react';
import './Search.scss';

/* eslint-disable */
interface Props {
  setAppliedQuery: (query: string) => void;
  category: string;
}

export const Search: React.FC<Props> = ({
  setAppliedQuery,
  category,
 }) => {
  const [query, setQuery] = useState('');
  const [isClearVisible, setIsClearVisible] = useState(false);
  const timerId = useRef(0);

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (event.target.value === '') {
      setIsClearVisible(false);
    } else {
      setIsClearVisible(true);
    }

    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      setAppliedQuery(event.target.value);
    }, 1000);
  };

  const handleClear = () => {
    setQuery('');
    setIsClearVisible(false);
    setAppliedQuery('');
  }

  return (
    <div className="search">
      <label htmlFor="search-query" className="search__label">
        {`Search ${category}`}
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
        <div
          className={"search__clear" + (isClearVisible ? '' : 'disabled')}
          onClick={handleClear}
        ></div>
      </div>
    </div>
  );
};
