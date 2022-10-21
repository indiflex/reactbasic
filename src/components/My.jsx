import { useEffect, useRef } from 'react';
import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';

export const My = () => {
  const { session, logout, addCartItem, removeCartItem } = useSession();
  console.log('@@@@ My.session>>>', session);
  const itemNameRef = useRef();
  const itemPriceRef = useRef();

  const logoutBtnRef = useRef();
  useEffect(() => {
    if (logoutBtnRef.current) logoutBtnRef.current.onclick = logout;
  }, [logout]);

  const submit = (evt) => {
    evt.preventDefault();
    const $name = itemNameRef.current;
    const $price = itemPriceRef.current;
    if (!$name.value) {
      alert('Input the item name, plz');
      return $name.focus();
    } else if (!$price.value) {
      alert('Input the item price, plz');
      return $price.focus();
    }

    addCartItem($name.value, Number($price.value));
  };

  const styles = {
    left: { textAlign: 'left' },
  };

  return (
    <>
      {session.loginUser ? <Profile ref={logoutBtnRef} /> : <Login />}
      <ul style={styles.left}>
        {session?.cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeCartItem(item.id)}>DEL</button>
          </li>
        ))}
      </ul>
      <form onSubmit={submit}>
        <label htmlFor='item-name'>
          상품명:
          <input
            id='item-name'
            type='text'
            ref={itemNameRef}
            placeholder='아이템 이름...'
            required
          />
        </label>
        <label htmlFor='item-price'>
          금액:
          <input
            id='item-price'
            type='number'
            defaultValue={0}
            ref={itemPriceRef}
            placeholder='금액...'
            required
          />
        </label>
        <button>담기</button>
      </form>
    </>
  );
};
