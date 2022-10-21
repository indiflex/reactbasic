import { useRef } from 'react';
import { useSession } from '../hooks/session-context';

const Login = () => {
  console.log('@@@ Login');
  // const [userId, setUserId] = useState();
  const userIdRef = useRef();
  const userNameRef = useRef();

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
