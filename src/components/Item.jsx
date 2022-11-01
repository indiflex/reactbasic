import { useEffect } from 'react';
import { useRef } from 'react';
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export const Item = () => {
  const { id } = useParams(); // Item.jsx
  const location = useLocation();
  console.log('location>>>>>>', location);
  const [searchParams] = useSearchParams();
  console.log('sssssssssssspp>>', searchParams.get('setSearchStr'));
  const navigate = useNavigate();

  const { addCartItem, removeCartItem } = useOutletContext();

  const itemNameRef = useRef();
  const itemPriceRef = useRef();
  // const ctx = useOutletContext();
  let item = location.state;
  console.log('item>>>>>', item);

  if (!item) {
    item = { id, name: '신규아이템', price: 0 };
  }
  const isAdding = id === '0';

  const save = (evt) => {
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

    addCartItem($name.value, Number($price.value), Number(id));
  };

  const remove = () => {
    if (confirm('A u sure?')) {
      removeCartItem(Number(id));
      navigate('/items');
    }
  };

  useEffect(() => {
    itemNameRef.current.value = item.name;
    itemPriceRef.current.value = item.price;
  }, [item]);

  return (
    <>
      <h3>Item {isAdding && '추가'}</h3>
      {!isAdding && (
        <div>
          <strong>{item.name}</strong> (₩{item.price.toLocaleString()})
          <button onClick={remove}>DEL</button>
        </div>
      )}
      <form onSubmit={save}>
        <input type='text' defaultValue={item.name} ref={itemNameRef} />
        <input type='number' defaultValue={item.price} ref={itemPriceRef} />
      </form>
      <button onClick={save}>{isAdding ? '추가' : '수정'}</button>
    </>
  );
};
