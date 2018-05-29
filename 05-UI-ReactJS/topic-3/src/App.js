import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddMovie from './containers/AddMovie';
import MovieList from './containers/MovieList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h2>Movies redux example</h2><hr/>
          </header>
          <AddMovie />
          <hr />
          <MovieList />
        </div>
      </Provider>
    );
  }
}

export default App;
