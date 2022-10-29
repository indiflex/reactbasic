import { useEffect } from 'react';

// 자식 컴포넌트
export const Child = ({ fn }) => {
  console.log('Child rendering!');
  useEffect(() => {
    console.log('call fn()!!!!!!');
    fn(); // fn 변경 없으면 1회만 실행!
  }, [fn]);

  return <button>Compo</button>;
};
