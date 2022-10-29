import { createContext, useContext, useReducer } from 'react';
// import { flushSync } from 'react-dom';

const CountContext = createContext();

const reducer = (count, action) => {
  switch (action.type) {
    case 'plus':
      console.log('plus----------------------', count);
      return count + 1;
    case 'minus':
      console.log('minus----------------------', count);
      return count - 1;
    default:
      return count;
  }
};

export const CountProvider = ({ children }) => {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);
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
    // setCount((c) => c + 1);
    dispatch({ type: 'plus' });
  };

  const minusCount = () => {
    console.log('MINUS!!');
    // setCount((c) => c - 1);
    dispatch({ type: 'minus' });
  };

  return (
    <CountContext.Provider value={{ count, plusCount, minusCount, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
