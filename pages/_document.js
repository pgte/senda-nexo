import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import {
  MainContainer,
  Grid,
  Row,
  Col
} from '@sketchpixy/rubix'

import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Footer from '../components/footer'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage, pathname, query }) {
    console.log('pathname', pathname)
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles, pathname, query }
  }

  render () {
    return (
      <html className="default" dir="ltr">
        <Head>
          <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link href="/static/css/pace.css" rel="stylesheet" type="text/css" />
          <link href="/static/css/main.css" rel="stylesheet" type="text/css" />
          <script type="text/javascript" src='/static/js/pace.min.js'></script>
        </Head>
        <body className="pace-big" data-version="4.1.0">
          {this.props.customValue}
          <MainContainer {...this.props}>
            <Sidebar pathname={this.props.pathname} />
            <Header {...this.props} />
            <div id='body'>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <Main />
                  </Col>
                </Row>
              </Grid>
            </div>
            <Footer />
          </MainContainer>
          <NextScript />
        </body>
      </html>
    )
  }
}
