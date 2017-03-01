import { ZOOM } from '../constants/actionTypes.jsx'

export default function (state = null, action){
  switch(action.type) {
  case ZOOM:
    return action.payload;
  }
  return state;
}