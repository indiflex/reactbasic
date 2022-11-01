import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const ItemLayout = () => {
  const { session, addCartItem, removeCartItem } = useSession();
  // const [searchStr, setSearchStr] = useState('');

  const [searchParams, setSearchParams] = useSearchParams({ searchStr: '' });
  const searchStr = searchParams.get('searchStr');

  const search = (evt) => {
    // setSearchStr(evt.target.value);
    setSearchParams({ searchStr: evt.target.value });
  };

  return (
    <>
      <h2>ITEM LIST</h2>
      <input
        type='text'
        onChange={search}
        value={searchStr}
        placeholder='search...'
      />
      <ul className='no-list'>
        {session?.cart
          ?.filter((item) => item.name.includes(searchStr))
          .map((item) => (
            <li key={item.id}>
              <Link
                to={`/items/${item.id}?searchStr=${searchStr}`}
                state={item}
              >
                {item.name}
              </Link>
            </li>
          ))}
        <li>
          <Link to='/items/0'>
            <small>추가하기</small>
          </Link>
        </li>
      </ul>
      <Outlet context={{ items: session?.cart, addCartItem, removeCartItem }} />
    </>
  );
};
