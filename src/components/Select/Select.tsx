import { useEffect, useRef, useState } from 'react';
import './Select.scss';

/* eslint-disable */
interface Props {
  title: string,
  perPage: number,
  handlePerPage: (option: number) => void,
}

export const Select: React.FC<Props> = ({
  title,
  perPage,
  handlePerPage,
}) => {
  const [droped, setDroped] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(16);

  const selectRef = useRef<HTMLDivElement>(null);

  const options = [16, 32, 48, 64];

  const handleClickOutside: EventListener = (event) => {
    const targetNode = event.target as Node;

    if (selectRef.current && !selectRef.current.contains(targetNode)) {
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

  const handleOptionClick = (option: number) => {
    handlePerPage(option);
    setSelectedQuantity(option);
    setDroped(false);
  };

  return (
    <div
      className='select'
      ref={selectRef}
    >
      <label
        className='select__label'
        htmlFor="perPageSelector"
      >
        {title}
      </label>

      <div
        className='select__select'
        onClick={handleListDisplay}
      >
        <p className='select__select--default'>
          {selectedQuantity}
        </p>
      </div>
      {droped && (
        <ul className='select__select-items'>
          {options.map(option => {
            return (
              <li
                className='select__item'
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
