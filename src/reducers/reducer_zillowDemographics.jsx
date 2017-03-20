import { ZILLOW_DEMOGRAPHICS } from '../constants/actionTypes.jsx'

export default function (state = null, action){
  switch(action.type) {
  case 'ZILLOW_DEMOGRAPHICS':
    return action.payload;
  }
  return state;
}