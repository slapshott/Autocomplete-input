const initialState = {
  data: []
};


const data = (state = initialState, {type, payload}) => {
 
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};

export default data