// import { useEffect, useRef } from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { Parent } from './components/Parent';
import { useCount } from './hooks/count-context';
import { useSample } from './hooks/sample-hook';
import { SessionProvider } from './hooks/session-context';

function App() {
  // const { count, countRef } = useCount();
  const { count, plusCount, minusCount } = useCount();
  const sample = useSample();

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [position2, setPosition2] = useState({ x: 0, y: 0 });
  // const catchMousePosition = ({ x, y }) => {
  //   console.log(x, y);
  //   setPosition({ x, y });
  // };

  // const catchMousePosition2 = ({ x, y }) => {
  //   console.log(x, y);
  //   setPosition2({ x, y });
  // };

  // useLayoutEffect(() => {
  //   // ← 만약 useEffect로 하면?? 거의(컴이 빠르면 찰나의 차이) 동일
  //   window.addEventListener('mousemove', catchMousePosition);
  //   return () => window.removeEventListener('mousemove', catchMousePosition);
  // }, []);

  // useEffect(() => {
  //   // ← 만약 useEffect로 하면?? 거의(컴이 빠르면 찰나의 차이) 동일
  //   window.addEventListener('mousemove', catchMousePosition2);
  //   return () => window.removeEventListener('mousemove', catchMousePosition2);
  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <small>{JSON.stringify(position)}</small>
        <small
          style={{
            backgroundColor: position.x !== position2.x ? 'red' : 'yellow',
          }}
        >
          {JSON.stringify(position2)}
        </small> */}

        <SessionProvider>
          <My />
          <Parent />
        </SessionProvider>

        <h3>{sample}</h3>

        <h2>
          Count:
          {/* <span id='cnt' ref={countRef}> */}
          <span id='cnt'>{count}</span>
          <button onClick={plusCount}>Count++</button>
          <button onClick={minusCount}>Count--</button>
        </h2>
        {/* <Hello props={{ name: 'Hong', isMale: true }} /> */}
        {/* <Hello age={0} /> */}
        {/* <Hello name='홍길동' age={30}>
          <h3>반갑습니다~</h3>
        </Hello> */}
      </header>
    </div>
  );
}

export default App;
