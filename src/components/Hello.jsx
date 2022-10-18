import { useState } from "react";

export const Hello = (props) => {
  // console.log('@@@@@ Hello');
  const [isActive, setActive] = useState(false);

  return (<>
    <h1 style={{ backgroundColor: 'gray' }}>Hello,
      {props.name}
      {props.age && (props.isMale ? '군' : '양')}
      ({props.age ? props.age : 25})!
    </h1>
    {props.children}
    <div>
      <p>회원등급: {isActive ? '정' : '준'}회원</p>
      <button onClick={() => setActive(!isActive)}>Toggle</button>
      <button onClick={() => props.plusCount()}>Count++</button>
    </div>
  </>);
};
Hello.defaultProps = { name: 'World', isMale: false };
