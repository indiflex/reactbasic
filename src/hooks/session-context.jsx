import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useFetch } from './fetch-hook';
// import SampleSession from '../../public/data/sample.json';

const SAMPLE_URL = '/data/sample.json';

const STORAGE = {
  SESSION: 'my-session',
};

const getStorage = (key = STORAGE.SESSION) =>
  JSON.parse(localStorage.getItem(key));
const setStorage = (value, key = STORAGE.SESSION) =>
  localStorage.setItem(
    key,
    typeof value === 'object' ? JSON.stringify(value) : value
  );

const TYPES = {
  SET: Symbol('setSession'),
  LOGIN: Symbol('login'),
  LOGOUT: Symbol('logout'),
  ADD_ITEM: Symbol('addItem'),
  REMOVE_ITEM: Symbol('removeItem'),
};

const reducer = (session, action) => {
  switch (action.type) {
    case TYPES.SET:
      setStorage(action.payload);
      return action.payload;

    case TYPES.LOGIN:
      return { ...session, loginUser: action.payload };

    case TYPES.LOGOUT:
      return { ...session, loginUser: null };

    case TYPES.ADD_ITEM:
      console.log('@@@@@@ addCartItem-reducer');
      // if (!session.cart.find((item) => item.id === action.payload.id))
      //   session.cart.push(action.payload);
      return { ...session };

    case TYPES.REMOVE_ITEM:
      return {
        ...session,
        cart: session.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      throw new Error(`${action.type} is not exists!`);
  }
};

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  // const [session, setSession] = useState({});
  const [session, dispatch] = useReducer(reducer, {});
  const data = useFetch(SAMPLE_URL, getStorage());
  console.log('SESSIN>>>>>>>>>>', session, data);
  useEffect(() => {
    console.log('dddddddddd>>', data);
    // if (data) setSession(data);
    dispatch({ type: TYPES.SET, payload: data });
  }, [data]);

  const login = useCallback((userInfo) => {
    // setSession({ ...session, loginUser: { id, name } });
    dispatch({ type: TYPES.LOGIN, payload: userInfo });
  }, []);

  const logout = useCallback(() => {
    console.log('App.logout!!');
    // session.loginUser = null; // bad! re-render
    // setSession({ ...session, loginUser: null });
    dispatch({ type: TYPES.LOGOUT });
  }, [session]);

  const addCartItem = useCallback(
    (name, price) => {
      console.log('@@@@@@ addCartItem');
      const maxId = Math.max(...session.cart.map((item) => item.id), 0);
      // session.cart.push({ id: maxId + 1, name, price });
      // setSession({ ...session });
      // fetch(url, { method: 'POST', body: {} })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     session.cart.push({ id: maxId + 1, name, price });
      //     dispatch({
      //       type: TYPES.ADD_ITEM,
      //       payload: data,
      //     });
      //   });
      session.cart.push({ id: maxId + 1, name, price });
      dispatch({ type: TYPES.ADD_ITEM });
    },
    [session]
  );
  // const addCartItem = (name, price) => {
  //   console.log('@@@@@@ addCartItem');
  //   const maxId = Math.max(...session.cart.map((item) => item.id), 0);
  //   // session.cart.push({ id: maxId + 1, name, price });
  //   // setSession({ ...session });
  //   dispatch({ type: TYPES.ADD_ITEM, payload: { id: maxId + 1, name, price } });
  // };

  const removeCartItem = useCallback((id) => {
    // setSession({
    //   ...session,
    //   cart: session.cart.filter((item) => item.id !== id),
    // });
    dispatch({ type: TYPES.REMOVE_ITEM, payload: { id } });
  }, []);

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
