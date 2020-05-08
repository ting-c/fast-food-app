export const setCurrentUser = user => (
  { 
    type: 'SET_CURRENT_USER',
    payload: user
  }
)

export const signOutUser = () => (
  {
    type: 'SIGN_OUT_USER'
  }
)