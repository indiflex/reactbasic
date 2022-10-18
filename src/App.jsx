import { useState } from "react";
import "./App.css";
import { Hello } from "./components/Hello";
import { My } from "./components/My";

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 }
  ]
}
  
function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState(SampleSession);

  const logout = () => {
    console.log('App.logout!!')
    // session.loginUser = null;
    setSession({...session, loginUser: null});
    console.log('App.session>>>', session)
  }

  const plusCount = evt => {
    console.log('111>>', count)
    setCount(count => {
      count += 1;
      console.log('222>>', count)

      return count;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <My session={session} logout={logout} />

        <h2>Count: {count}</h2>
        <Hello name='Hong' isMale={true} plusCount={plusCount} />
        {/* <Hello age={0} /> */}
        {/* <Hello name='홍길동' age={30}><h3>반갑습니다~</h3></Hello> */}
      </header>
    </div>
  );
}

export default App;
