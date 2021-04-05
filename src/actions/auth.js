import Swal from 'sweetalert2';

import { auth } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLogingEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    auth.signInWithEmailAndPassword(email, password)
      .then( ({user}) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName, user.email))
        dispatch(finishLoading());
      })
      .catch( e => {
        dispatch(finishLoading());
        Swal.fire('Error', e.message, 'error');
      })
  }
}

export const login = (uid, displayName, email) => {
  return{
    type: types.login,
    payload: {
      uid,
      displayName,
      email
    }
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch( logout() );
    } catch (error) {
      console.log(error);
    }
  }
}

export const logout = () => {
  console.log('pase por el logout')
  return {
    type: types.logout
  }
}