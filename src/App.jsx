// import { useEffect, useRef } from 'react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { Hello } from './components/Hello';
import { Home } from './components/Home';
import { Item } from './components/Item';
import { ItemLayout } from './components/ItemLayout';
import { Items } from './components/Items';
import Login from './components/Login';
import { My } from './components/My';
import { useCount } from './hooks/count-context';
import { useSample } from './hooks/sample-hook';
import { SessionProvider } from './hooks/session-context';
import { Nav } from './Nav';
import { NotFound } from './NotFound';

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
      <SessionProvider>
        <header className='App-header'>
          <Nav />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my' element={<My />} />
          <Route path='/login' element={<Login />} />
          <Route path='/items' element={<ItemLayout />}>
            <Route index element={<Items />} />
            <Route path=':id' element={<Item />} />
          </Route>
          <Route path='/hello' element={<Hello />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>
    </div>
  );
}

export default App;
