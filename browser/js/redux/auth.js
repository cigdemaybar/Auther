import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER'


/* ------------   ACTION CREATORS     ------------------ */

const login = user => ({ type: SET_CURRENT_USER, user });

/* ------------       REDUCER     ------------------ */

export default function reducer(user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const loginUser = (email, password) => {
  return dispatch => {
    return axios.post('/api/login', {email: email, password: password})
      .then(res => dispatch(login(res.data)));
  }
};
