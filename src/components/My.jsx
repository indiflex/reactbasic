import {
  memo,
  useCallback,
  // useCallback,
  useEffect,
  // useLayoutEffect,
  useRef,
  // useState,
} from 'react';
import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';
// import { flushSync } from 'react-dom';

// const MemoedLogin = memo(Login);

export const My = () => {
  const { session, login, logout, addCartItem, removeCartItem } = useSession();
  console.log('@@@@ My.session>>>', session);
  // console.log('***************************************');
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

    console.log('ssssssssssss>>', session, session.cart);
    addCartItem($name.value, Number($price.value));
  };

  const styles = {
    left: { textAlign: 'left' },
  };

  // const [ulHeight, setUlHeight] = useState(0);
  // const cntRef = useRef(0);
  // const f100 = () => {
  //   console.log('aaaaaaaaaa>>', cntRef.current);
  //   for (let i = 0; i < 100; i++) {
  //     cntRef.current += 1;
  //     // flushSync(() => setUlHeight((pre) => pre + 1));
  //   }
  //   // setTimeout(() => {
  //   // console.log('aa>>', cntRef.current);
  //   setUlHeight(cntRef.current);
  //   // }, 500);
  // };

  return (
    <>
      {session?.loginUser ? (
        <Profile ref={logoutBtnRef} />
      ) : (
        <Login login={login} />
      )}
      {/* <h3>
        ul.height: {ulHeight} - {cntRef.current}
      </h3> */}
      {session?.cart?.length}
      <ul style={styles.left}>
        {session?.cart?.map((item) => (
          <li key={item.id}>
            {item.name}
            {/* <button onClick={() => removeCartItem(item.id)}>DEL</button> */}
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
            defaultValue='신규아이템'
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
