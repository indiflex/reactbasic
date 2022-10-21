// import { useEffect, useRef } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { useCount } from './hooks/count-context';
import { useSample } from './hooks/sample-hook';
import { SessionProvider } from './hooks/session-context';

function App() {
  // const { count, countRef } = useCount();
  const { count } = useCount();
  const sample = useSample();

  return (
    <div className='App'>
      <header className='App-header'>
        <SessionProvider>
          <My />
        </SessionProvider>

        <h3>{sample}</h3>

        <h2>
          Count:
          {/* <span id='cnt' ref={countRef}> */}
          <span id='cnt'>{count}</span>
        </h2>
        <Hello props={{ name: 'Hong', isMale: true }} />
        {/* <Hello age={0} /> */}
        {/* <Hello name='홍길동' age={30}><h3>반갑습니다~</h3></Hello> */}
      </header>
    </div>
  );
}

export default App;
