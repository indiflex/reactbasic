import { useLocation, useParams, useSearchParams } from 'react-router-dom';

export const Item = () => {
  const { id } = useParams(); // Item.jsx
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('sssssssssssspp>>', searchParams.get('aaa'));
  return (
    <>
      <h3>Item: {id}</h3>
      <button onClick={() => setSearchParams({ aaa: '333' })}>SETP</button>
    </>
  );
};
