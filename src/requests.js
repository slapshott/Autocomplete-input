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
  // fetch('https://...')
  //     .then(response => response.json())
  //     .then(data => {
  //       dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
  //     })
  //     .catch(error => {
  //       dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
  //     });
  return (dispatch, getState) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: [
          { title: '234234', description: `28397428943724929847 939449` },
          { title: '85747338', description: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...` },
          { title: '786462271123', description: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'}
        ] });
  };
};
      