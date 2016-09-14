import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import App from './containers/App'


//const App = (props) => <div><h1>123</h1>{props.children}</div>;
const Home = () => <div><h1>About</h1></div>;
const Foo = () => <div><h1>Contact</h1></div>;
const Bar = () => <div><h1>Contact</h1></div>;

const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="foo" component={Foo}/>
          <Route path="bar" component={Bar}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)
