import { useEffect, useRef, useState, MouseEvent } from 'react';
import './Dropdown.scss';

interface Props {
  title: string,
  perPage: number,
  handlePerPage: (option: number) => void,
}

export const Dropdown: React.FC<Props> = ({
  title,
  perPage,
  handlePerPage,
}) => {
  const [droped, setDroped] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(16);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [16, 32, 48, 64];

  const handleClickOutside: EventListener  = (event) => {
    const targetNode = event.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(targetNode)) {
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
      console.log('drop')
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
        className='dropdown'
        ref={dropdownRef}
      >
        <label
          className='dropdown__label'
          htmlFor="perPageSelector"
        >
          {title}
        </label>

        <div
          className='dropdown__select'
          onClick={handleListDisplay}
        >
          <div>
          </div>
          <p className='dropdown__select--default'>       
            {selectedQuantity}
          </p>
        </div>
        {droped && (
          <ul className='dropdown__select-items'>
            {options.map(option => {
              return (
                <li
                  className='dropdown__item'
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
}
