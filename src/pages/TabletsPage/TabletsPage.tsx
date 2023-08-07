import './TabletsPage.scss';

import { Link } from "react-router-dom";

export const TabletsPage = () => {
  return (
    <>
      <div className="tabletspage">
        <div className='breadcrumbs'>
          <Link
          className='breadcrumbs__home'
          to='/home'
          ></Link>
          <div className='breadcrumbs__arrow'></div>
          <p>Tablets</p>
        </div>
        <h1 className="title">{'No tablets yet 😔'}</h1>
      </div>
    </>
  );
};
