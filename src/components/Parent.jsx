import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Child } from './Child';

const Button = styled.button`
  background-color: blue;
`;

export const Parent = ({ className }) => {
  console.log('@@@ Parent');
  const [state, setState] = useState(0);
  const [rrr, render] = useState();
  // const fn = () => console.log('useCallbacked.fn');
  const fn = useCallback(() => console.log('useCallbacked.fn', state), [state]);
  useEffect(() => console.log('*****'), [fn]); // 여기도 한번!

  return (
    <div className={className}>
      <Child fn={fn} />
      <hr />
      <div className='ddd'>
        *Parent: {rrr} - {state}
        <input type='text' onChange={(e) => render(e.target.value)} />
        <Button onClick={() => setState((pre) => pre + 1)}>State</Button>
      </div>
    </div>
  );
};
