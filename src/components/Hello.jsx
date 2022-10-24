import { useEffect, useState } from 'react';
import { useCount } from '../hooks/count-context';

export const Hello = (props) => {
  console.log('@@@@@ Hello');
  const { plusCount } = useCount();
  const [isActive, setActive] = useState(false);

  // const [, rerender] = useState();
  // let primitive = 123;
  // useEffect(() => {
  //   console.log('effect primitive!!!');
  // }, [primitive]);

  // const array = useMemo(() => [1, 2, 3], []);
  // useEffect(() => {
  //   console.log('effect Array!!!');
  // }, [array]);

  const [badSec, setBadSec] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setBadSec((pre) => pre + 1);
    }, 1000);
  }, []);

  const [goodSec, setGoodSec] = useState(0);
  useEffect(() => {
    const intl = setInterval(() => {
      setGoodSec((pre) => pre + 1);
    }, 1000);

    return () => clearInterval(intl);
  }, []);

  return (
    <>
      {/* <input type='text' onChange={rerender} />; */}
      <h1 style={{ backgroundColor: 'gray', width: '95%', padding: '1rem' }}>
        <span style={{ float: 'left', color: 'pink' }}>{badSec} s</span>
        <span style={{ float: 'right', color: 'lightgreen' }}>{goodSec} s</span>
        Hello,
        {props.name}
        {props.age && (props.isMale ? '군' : '양')}({props.age ? props.age : 25}
        )!
      </h1>
      {props.children}
      <div>
        <p>회원등급: {isActive ? '정' : '준'}회원</p>
        <button onClick={() => setActive(!isActive)}>Toggle</button>
        <button onClick={() => plusCount()}>Count++</button>
        <button id='btn'>xxx</button>
      </div>
    </>
  );
};
Hello.defaultProps = { name: 'World', isMale: false };
