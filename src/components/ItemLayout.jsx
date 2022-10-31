import { Link, Outlet } from 'react-router-dom';

export const ItemLayout = () => {
  return (
    <>
      <h2>ITEMS</h2>
      <Link to='/items/1'>Item1</Link>|<Link to='/items/2'>Item2</Link>
      <Outlet context={{ name: 'Hong' }} />
    </>
  );
};
