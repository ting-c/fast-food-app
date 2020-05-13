import userReducer from './userReducer';
import { UserActionTypes } from './../types/types';
import { INITIAL_STATE } from './userReducer';

describe('User Reducer', () => {

  it('Should return initial state by default', () => {
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('Should return expected state if receiving an action object', () => {
    const user = {name: 'Testing'};
    const expectedState = {
      currentUser: user,
    };
    const newState = userReducer(undefined, {
      type: UserActionTypes.SET_CURRENT_USER,
      payload: user
    });
    expect(newState).toEqual(expectedState);
  });

})