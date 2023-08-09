import { useEffect, useRef, useState } from 'react';
import './Sorting.scss';

/* eslint-disable */
interface Props {
  title: string,
  filter: string,
  setFilter: (sorting: string) => void
  setCurrentPage: (page: number) => void
}

export const Sorting: React.FC<Props> = ({
  title,
  filter,
  setFilter,
  setCurrentPage,
}) => {
  const [droped, setDroped] = useState(false);
  const sortingRef = useRef<HTMLDivElement>(null);

  const options = ['Newest', 'Price ⇂', 'Price ↾']

  const handleClickOutside: EventListener = (event) => {
    const targetNode = event.target as Node;

    if (sortingRef.current && !sortingRef.current.contains(targetNode)) {
      setDroped(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleListDisplay = () => {
    if (droped) {
      setDroped(false);

      return;
    }

    setDroped(true);
  };

  const handleOptionClick = (option: string) => {
    setFilter(option);
    setCurrentPage(1);
    setDroped(false);
  };

  return (
    <div
      className='sorting'
      ref={sortingRef}
    >
      <label
        className='sorting__label'
        htmlFor="perPagesortingor"
      >
        {title}
      </label>

      <div
        className='sorting__select'
        onClick={handleListDisplay}
      >
        <p className='sorting__select--default'>
          {filter}
        </p>
      </div>
      {droped && (
        <ul className='sorting__select-items'>
          {options.map(option => (
              <li
                className='sorting__item'
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
