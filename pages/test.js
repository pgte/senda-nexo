import { initStore } from '../store'
import withRedux from 'next-redux-wrapper'

import Page from '../components/Page'
import WorkArea from '../components/WorkArea'
import WorkCollection from '../components/WorkCollection'
import Panel from '../components/Panel'

class App extends Page {
  render() {
    const width = this.state.width
    const height = this.state.height
    return (
      <WorkArea width={width} height={height}>
        <WorkCollection width={width} height={height}>
          <Panel title='1.1' height={height}>
            Hey
          </Panel>
          <Panel title='1.2' height={height}>
            Yo
          </Panel>
          <Panel title='1.3' height={height}>
            Yo
          </Panel>
        </WorkCollection>
        <WorkCollection height={height} width={width}>
          <Panel title='2.1' height={height}>
            Hey
          </Panel>
          <Panel title='2.2' selected height={height}>
            Yo
          </Panel>
          <Panel title='2.3' height={height}>
            Yo
          </Panel>
        </WorkCollection>
      </WorkArea>
    );
  }
}

export default withRedux(initStore)(App)
