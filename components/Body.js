import React from 'react'
import { Main } from 'next/document'
import {
  Grid,
  Row,
  Col
} from '@sketchpixy/rubix'


class Body extends React.Component {
  render () {
    return (
      <div id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <Main/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Body
