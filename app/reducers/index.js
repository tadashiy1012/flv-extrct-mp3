import {handleAction, handleActions} from 'redux-actions';
import {setSrc, setOut, setDone} from '../actions';

const reducer = handleActions({
  [setSrc]: (state, action) => {
    return Object.assign({}, state, {
      src: action.payload
    });
  },
  [setOut]: (state, action) => {
    return Object.assign({}, state, {
      out: action.payload
    });
  },
  [setDone]: (state, action) => {
    return Object.assign({}, state, {
      result: action.payload
    });
  }
},{
  src: '',
  out: '',
  result: ''
});

export default reducer;