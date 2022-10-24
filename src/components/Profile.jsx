/* eslint-disable react/display-name */

import { forwardRef } from 'react';
import { useSession } from '../hooks/session-context';

// const Profile = (ref) => {
const Profile = forwardRef((props, ref) => {
  console.log('@@@ Profile');
  const {
    session: {
      loginUser: { name: userName },
    },
  } = useSession();

  return (
    <>
      <div>User ID: {userName}</div>
      {/* <button onClick={logout}>Logout</button> */}
      <button ref={ref}>Logout</button>
    </>
  );
});

export default Profile;
