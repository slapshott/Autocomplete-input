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
  return (dispatch, getState) => {
    // dispatch({ type: 'FETCH_DATA_REQUEST' });
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: [
          { title: 'React', description: `React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners ...` },
          { title: 'React – A JavaScript library for building user interfaces', description: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...` },
          { title: 'Redux - A predictable state container for JavaScript apps ...', description: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'}
        ] });

    // Perform asynchronous operation (e.g., API call)
    // fetch('https://api.example.com/data')
    //   .then(response => response.json())
    //   .then(data => {
    //   })
    //   .catch(error => {
    //     dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    //   });
  };
};
      