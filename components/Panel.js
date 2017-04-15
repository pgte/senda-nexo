import React from 'react';

import {
  Grid,
  Row,
  Col,
  PanelBody,
  PanelHeader,
  PanelContainer
} from '@sketchpixy/rubix'

export default class Panel extends React.Component {
  render () {
    return (
      <PanelContainer>
        <PanelHeader className='bg-orange65 fg-white'>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>{this.props.title}</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col xs={12} style={{height: this.props.height - 79.5}}>
                {this.props.children}
              </Col>
            </Row>
          </Grid>
        </PanelBody>
      </PanelContainer>
    )
  }
}

Panel.propTypes = {
  title: React.PropTypes.string.isRequired,
  height: React.PropTypes.number
}
