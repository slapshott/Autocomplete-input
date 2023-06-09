const initialState = {
  data: [
    { title: 'React', description: `React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners ...` },
    { title: 'React – A JavaScript library for building user interfaces', description: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...` },
    { title: 'Redux - A predictable state container for JavaScript apps ...', description: 'Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'}
  ]
};

// import { fetchDataSuccess } from "../../requests";

const data = (state = initialState, action) => {
 
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return {
        ...state,
      };
    case 'ACTION_TYPE_2':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default data