import {
  // useCallback,
  useEffect,
  // useLayoutEffect,
  useRef,
  // useState,
} from 'react';
import styles from './My.module.css';
import Profile from './Profile';
import Login from './Login';
import { useSession } from '../hooks/session-context';
// import { flushSync } from 'react-dom';

// const MemoedLogin = memo(Login);

export const My = () => {
  const { session, login, logout, addCartItem, removeCartItem } = useSession();
  console.log('@@@@ My.session>>>', session);
  // console.log('***************************************');

  const logoutBtnRef = useRef();
  useEffect(() => {
    if (logoutBtnRef.current) logoutBtnRef.current.onclick = logout;
  }, [logout]);

  // const styles = {
  //   left: { textAlign: 'left' },
  // };

  // const [ulHeight, setUlHeight] = useState(0);
  // const cntRef = useRef(0);
  // const f100 = () => {
  //   console.log('aaaaaaaaaa>>', cntRef.current);
  //   for (let i = 0; i < 100; i++) {
  //     cntRef.current += 1;
  //     // flushSync(() => setUlHeight((pre) => pre + 1));
  //   }
  //   // setTimeout(() => {
  //   // console.log('aa>>', cntRef.current);
  //   setUlHeight(cntRef.current);
  //   // }, 500);
  // };

  return (
    <div>
      {session?.loginUser ? (
        <Profile ref={logoutBtnRef} />
      ) : (
        <Login login={login} />
      )}
      {/* <h3>
        ul.height: {ulHeight} - {cntRef.current}
      </h3> */}
      {session?.cart?.length}
      {/* <ul className={styles['no-list']} style={styles.left}> */}
    </div>
  );
};
