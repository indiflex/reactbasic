import { useEffect, useState } from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import styles from './Child.module.css';

// 자식 컴포넌트
export const Child = ({ fn }) => {
  const cx = classNamesBind.bind(styles);
  console.log('Child rendering!');
  useEffect(() => {
    console.log('call fn()!!!!!!');
    fn(); // fn 변경 없으면 1회만 실행!
  }, [fn]);

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button className={styles['btn-bg-blue']}>Compo1</button>
      <button className={cx('color-white', { 'btn-bg-blue': isActive })}>
        Compo111
      </button>
      <button
        onClick={() => setIsActive(!isActive)}
        className={classNames(
          styles['color-white'],
          isActive ? styles['btn-bg-blue'] : ''
        )}
      >
        Compo2
      </button>
    </div>
  );
};
