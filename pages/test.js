import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

import Panel from '../components/Panel'

class App extends React.Component {
  render() {
    return (
      <Panel title='Test Title'>
        Hey
      </Panel>
    );
  }
}

export default withRedux(initStore)(App)
