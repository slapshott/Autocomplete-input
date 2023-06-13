import { fetchDataSuccess } from '../requests'

const initialState = {
  data: []
};


const data = (state = initialState, action) => {
 
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      console.log('payload', action)
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default data