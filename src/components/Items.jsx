import { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSession } from '../hooks/session-context';

export const Items = () => {
  const { session, addCartItem } = useSession();
  const itemNameRef = useRef();
  const itemPriceRef = useRef();
  const ctx = useOutletContext();

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

  return (
    <>
      <h1>Items : {ctx.name}</h1>

      <ul>
        {session?.cart?.map((item) => (
          <li key={item.id}>
            {item.name}
            {/* <button onClick={() => removeCartItem(item.id)}>DEL</button> */}
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
