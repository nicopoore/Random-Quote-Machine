import './App.css';
import MainDiv from './MainDiv.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Spring } from 'react-spring/renderprops';

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
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 300 }}
      >
        {props => (
          <div style={props}>
            <MainDiv />
          </div>
        )}
      </Spring>
    </Provider>
  );
}

export default App;
