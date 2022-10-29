export const reducer = (session, action) => {
  let newSession;
  switch (action.type) {
    case 'setInitValue':
      console.log('%%%%%%%%%%%%>>', action.payload);
      newSession = { ...action.payload };
      break;

    case 'login':
      newSession = { ...session, loginUser: action.payload };
      break;

    case 'logout':
      newSession = { ...session, loginUser: null };
      break;

    case 'addItem':
      // session.cart.push(action.payload);
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', action.payload);
      newSession = { ...session, cart: [...session.cart] };
      newSession.cart.push(action.payload);
      break;

    case 'removeItem':
      newSession = {
        ...session,
        cart: session.cart.filter((item) => item.id !== action.payload.itemId),
      };
      break;

    default:
      return session;
  }

  return newSession;
};
