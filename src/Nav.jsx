import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Nav.module.css';

const cx = classNames.bind(styles);
const activeFn = ({ isActive }) => cx({ active: isActive });

export const Nav = () => (
  <div>
    <nav>
      <ul className='no-list'>
        <li>
          <NavLink to='/reactbasic/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/reactbasic/login' className={activeFn}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/reactbasic/my'
            style={({ isActive }) => (isActive ? { color: 'blue' } : {})}
          >
            {({ isActive }) => (isActive ? 'My' : 'Your')}
          </NavLink>
        </li>
        <li>
          <NavLink to='/reactbasic/items' className={activeFn}>
            Items
          </NavLink>
        </li>
        <li>
          <NavLink to='/reactbasic/hello' className={activeFn}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);
