import { useOutletContext } from 'react-router-dom';

export const Items = () => {
  const ctx = useOutletContext();
  console.log('cccccccccccc>>', ctx);
  return (
    <>
      <h1>{ctx.items?.length} Items</h1>
    </>
  );
};
