import { Dropdown } from '../Dropdown/Dropdown';
import './Filter.scss';

interface Props {
  perPage: number,
  handlePerPage: (option: number) => void,
}

export const Filter: React.FC<Props> = ({
  perPage,
  handlePerPage,
}) => {

  return (
    <div className='filter'>
      <Dropdown
        title="Sort by"
        handlePerPage={handlePerPage}
        perPage={perPage}
      />

      <Dropdown
        title="Items on page"
        handlePerPage={handlePerPage}
        perPage={perPage}
      />
    </div>
  );
}
