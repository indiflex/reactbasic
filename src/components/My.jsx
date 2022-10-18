import Profile from './Profile';
import Login from './Login';

export const My = ({ session = {}, logout }) => {
  console.log('My.session>>>', session)
  return (
    <>
      {session.loginUser ? <Profile session={session} logout={logout} /> : <Login />}
      <ul>
        {session?.cart.map((item, i) =>
          <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  )
}
