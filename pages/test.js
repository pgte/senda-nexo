import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

class App extends React.Component {
  render() {
    return (
      <div>Test 123</div>
    );
  }
}

export default withRedux(initStore)(App)
