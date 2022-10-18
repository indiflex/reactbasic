// import { v4 } from 'uuid';

const Profile = ({ session, logout }) => {
  // const logout = evt => {
  //   evt.preventDefault();
  //   // session.loginUser = null;
  //   session = {};
  // }

  return (
    <>
      <div>User ID: {session.loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
      
    </>
  )
}

export default Profile;