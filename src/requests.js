export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

export const fetchDataSuccess = (user) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: user,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});


export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('data.json',
           {headers: 
               {'Content-Type': 'application/json','Accept': 'application/json'}
           });
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      // Handle any error
      console.error('Error fetching data:', error);
    }
  };
};
      