import { useCallback, useEffect, useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
  console.log('@@@ Parent');
  const [state, setState] = useState(0);
  const [rrr, render] = useState();
  // const fn = () => console.log('useCallbacked.fn');
  const fn = useCallback(() => console.log('useCallbacked.fn', state), [state]);
  useEffect(() => console.log('*****'), [fn]); // 여기도 한번!

  return (
    <>
      <Child fn={fn} />
      <hr />
      <div>
        Parent: {rrr} - {state}
        <input type='text' onChange={(e) => render(e.target.value)} />
        <button onClick={() => setState((pre) => pre + 1)}>State</button>
      </div>
    </>
  );
};
