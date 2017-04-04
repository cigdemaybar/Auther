import axios from 'axios';
import users

/* -----------------    ACTIONS     ------------------ */

const SET_CURRENT_USER = 'SET_CURRENT_USER'


/* ------------   ACTION CREATORS     ------------------ */

const login  = user => ({ type: SET_CURRENT_USER, user });

/* ------------       REDUCER     ------------------ */

export default function reducer (user = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user;

    default:
      return user;
  }
}


/* ------------       DISPATCHERS     ------------------ */

export const loginUser = ( ) => dispatch => {
  axios.post('/api/login', function(req, res) )
        .then(res => dispatch(init(res.data)));
};
