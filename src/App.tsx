import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import store from './redux/store';

import AppContainer from './AppContainer';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
