import React from 'react';
import { connect } from 'react-redux';
import { initStore } from '../store'
import actions from '../redux/actions';
import withRedux from 'next-redux-wrapper'

import {
  Row,
  Col,
  Grid,
  Panel,
  PanelBody,
  PanelContainer,
} from '@sketchpixy/rubix';

class Home extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(actions.getGreeting('Hello, World!'));
    return { isServer }
  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <p>{
                    this.props.greetings.hello}</p>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

export default withRedux(initStore)(Home)