import { createContext, useContext, useState } from 'react';
// import { flushSync } from 'react-dom';

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  // const plusCount = () => setCount(count + 1);

  // const countRef = useRef();
  // const plusCountRefVersion = () => {
  //   console.log('111>>', count);
  //   flushSync(() => setCount((c) => c + 1));

  //   console.log(
  //     '333>>',
  //     count,
  //     countRef.current.innerText,
  //     document.getElementById('cnt')?.innerText
  //   );
  // };

  const plusCount = () => {
    // flushSync(() => setCount((c) => c + 1));
    setCount((c) => c + 1);
  };

  const minusCount = () => {
    setCount((c) => c - 1);
  };

  return (
    <CountContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
