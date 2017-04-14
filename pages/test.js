import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

import WorkArea from '../components/WorkArea'
import Panel from '../components/Panel'

class App extends React.Component {
  render() {
    return (
      <WorkArea width={550} height={350}>
        <Panel title='Test Title'>
          Hey
        </Panel>
        <Panel title='Test Title 2'>
          Yo
        </Panel>
      </WorkArea>
    );
  }
}

export default withRedux(initStore)(App)
