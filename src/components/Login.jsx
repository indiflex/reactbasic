import { useEffect, useRef } from 'react';
import { useCount } from '../hooks/count-context';
import { useSession } from '../hooks/session-context';

const Login = () => {
  console.log('@@@ Login');
  // const [userId, setUserId] = useState();
  const userIdRef = useRef();
  const userNameRef = useRef();
  const { plusCount, minusCount } = useCount();

  const { login } = useSession();

  // fetch('/data/sample.json')
  //   .then((res) => res.json())
  //   .then((data) => console.log('res>>>', data));

  // console.log('xxxx111', userNameRef.current?.value);

  const submit = (evt) => {
    evt.preventDefault();
    const { value: id } = userIdRef.current;
    const { value: name } = userNameRef.current;

    if (!id) {
      alert('Input ID');
      return userIdRef.current.focus();
    } else if (!name) {
      alert('Input Name');
      return userNameRef.current.focus();
    }

    console.log('xxxx222', userNameRef.current?.value);
    login({ id, name });
  };

  useEffect(() => {
    console.log('effect!!!!!!');
    console.log('로인해주세요!');
    userIdRef.current.focus();
    plusCount();

    return () => {
      console.log('로인되었습니다!');
      minusCount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // }, [plusCount, minusCount]);

  return (
    <>
      <form onSubmit={submit}>
        <div>
          User ID:
          {/* <input
            type='number'
            onChange={(e) => {
              console.log('*******');
              setUserId(parseInt(e.target.value));
            }}
          /> */}
          <input type='number' ref={userIdRef} />;
        </div>
        <div>
          User Name: <input type='text' ref={userNameRef} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
