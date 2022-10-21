import { useState } from 'react';
import { useCount } from '../hooks/count-context';

export const Hello = (props) => {
  console.log('@@@@@ Hello');
  const { plusCount } = useCount();
  const [isActive, setActive] = useState(false);

  return (
    <>
      <h1 style={{ backgroundColor: 'gray' }}>
        Hello,
        {props.name}
        {props.age && (props.isMale ? '군' : '양')}({props.age ? props.age : 25}
        )!
      </h1>
      {props.children}
      <div>
        <p>회원등급: {isActive ? '정' : '준'}회원</p>
        <button onClick={() => setActive(!isActive)}>Toggle</button>
        <button onClick={() => plusCount()}>Count++</button>
        <button id='btn'>xxx</button>
      </div>
    </>
  );
};
Hello.defaultProps = { name: 'World', isMale: false };
