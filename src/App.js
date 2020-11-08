import './App.css';
import QuoteDiv from './QuoteDiv.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const NEW_QUOTE = 'NEW_QUOTE'

const defaultState = {
  quote: '',
  author: '',
  id_array: []
}

function rootReducer(state = defaultState, action) {
  switch(action.type) {
    case NEW_QUOTE:
      return {
        quote: action.quote,
        author: action.author,
        id_array: [...state.id_array, action._id]
      }
    default:
      return state
  }
}

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <QuoteDiv />
    </Provider>
  );
}

export default App;
