export const fetchDataRequest = () => ({
  type: 'FETCH_USER_REQUEST',
});

export const fetchDataSuccess = (user) => ({
  type: 'FETCH_USER_SUCCESS',
  payload: user,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_USER_FAILURE',
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    // try {
    //   const response = await fetch('');
    //   const data = await response.json();

    //   dispatch(fetchDataSuccess(data));
    // } catch (error) {
    //   dispatch(fetchDataFailure(error.message));
    // }
  };
};