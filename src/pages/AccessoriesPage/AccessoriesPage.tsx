import { Link } from "react-router-dom";

export const AccessoriesPage = () => {
  return (
    <>
      <div className="accessoriespage">
        <div className='breadcrumbs'>
          <Link
          className='breadcrumbs__home'
          to='/home'
          >
          </Link>
          <div className='breadcrumbs__arrow'></div>
          <p>Accessories</p>
        </div>
        <h1 className="title">{'No accessories yet 😔'}</h1>
      </div>
    </>
  );
};
