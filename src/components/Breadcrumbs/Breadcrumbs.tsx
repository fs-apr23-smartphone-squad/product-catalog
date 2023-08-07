// import cn from 'classnames';
import { Link } from 'react-router-dom';
// import './Breadcrumbs.scss';

/* eslint-disable */
interface Props {

}

export const Breadcrumbs: React.FC<Props> = ({

}) => {

  return (
    <div className='breadcrumbs'>
      <Link
      className='breadcrumbs__home'
      to='/home'
      ></Link>
      <div className='breadcrumbs__arrow'></div>
      <p>Phones</p>
    </div>
  );
};
