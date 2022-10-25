import { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from './fetch-hook';
// import SampleSession from '../../public/data/sample.json';

// const SampleSession = {
//   loginUser: { id: 1, name: '홍길동' },
//   cart: [
//     { id: 100, name: '라면', price: 3000 },
//     { id: 101, name: '컵라면', price: 2000 },
//     { id: 200, name: '파', price: 5000 },
//   ],
// };

const SAMPLE_URL = '/data/sample.json';

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({});

  const data = useFetch(SAMPLE_URL);
  useEffect(() => {
    console.log('dddddddddd>>', data);
    if (data) setSession(data);
  }, [data]);

  const login = ({ id, name }) => {
    setSession({ ...session, loginUser: { id, name } });
  };

  const logout = () => {
    console.log('App.logout!!');
    // session.loginUser = null; // bad! re-render
    setSession({ ...session, loginUser: null });
    console.log('App.session>>>', session);
  };

  const addCartItem = (name, price) => {
    const maxId = Math.max(...session.cart.map((item) => item.id), 0); // mapBy('id')
    session.cart.push({ id: maxId + 1, name, price });
    setSession({ ...session });
    // bad!!
    // setSession({
    //   ...session,
    //   cart: [...session.cart, { id: 300, name, price }],
    // });
  };

  const removeCartItem = (itemId) => {
    /* (bad!) sess라는 사본을 만들었는데 cart도 또 만들다니...
    const sess = { ...session };
    sess.cart = { ...sess.cart.filter((item) => item.id !== itemId) };
    setSession(sess);
    */

    /* (bad!) 윗 줄에서 session 사본을 만들었는데 cart도 사본을 만들고 있다!
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)], 
    });
    */

    // good
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== itemId),
    });
  };

  // useEffect(() => {
  //   fetch(SAMPLE_URL).
  // }, []);

  return (
    <SessionContext.Provider
      value={{
        session,
        login,
        logout,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionProvider, useSession };
