import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

import WorkArea from '../components/WorkArea'
import WorkCollection from '../components/WorkCollection'
import Panel from '../components/Panel'

class App extends React.Component {
  render() {
    return (
      <WorkArea width={550} height={350}>
        <WorkCollection height={350} width={550}>
          <Panel title='1.1'>
            Hey
          </Panel>
          <Panel title='1.2'>
            Yo
          </Panel>
          <Panel title='1.3'>
            Yo
          </Panel>
        </WorkCollection>
        <WorkCollection height={350} width={550}>
          <Panel title='2.1'>
            Hey
          </Panel>
          <Panel title='2.2'>
            Yo
          </Panel>
          <Panel title='2.3'>
            Yo
          </Panel>
        </WorkCollection>
      </WorkArea>
    );
  }
}

export default withRedux(initStore)(App)
