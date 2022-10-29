import { memo, useCallback, useState } from 'react';

const ColorTitle = ({ color, actFn }) => {
  console.log('@@@ ColorTitle!!', color);
  return (
    <h2 style={{ textAlign: 'center', color }}>
      MEMO
      <button onClick={actFn}>ACT</button>
    </h2>
  );
};

const MemoedColorTitle = memo(ColorTitle);

export const Color = () => {
  const [state, setState] = useState(0);
  const [color, setColor] = useState('');

  const actColor = () => {
    if (state % 3 === 0)
      setColor((color) => (color === 'red' ? 'blue' : 'red'));
    setState((state) => state + 1);
  };

  const actFn = useCallback(
    () => console.log('*********************', state),
    []
  );

  return (
    <>
      {/* <ColorTitle color='red' /> */}
      <MemoedColorTitle color={color} actFn={actFn} />
      {state}
      <button onClick={actColor}>MM</button>
    </>
  );
};
