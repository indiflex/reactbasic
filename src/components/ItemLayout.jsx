import { Link, Outlet } from 'react-router-dom';

export const ItemLayout = () => {
  return (
    <>
      <h2>ITEMS</h2>
      <Link to='/items/1'>Item11</Link>|<Link to='/items/2'>Item22</Link>
      <Outlet context={{ name: 'Hong' }} />
    </>
  );
};
