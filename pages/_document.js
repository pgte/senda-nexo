import Document, { Head, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import { MainContainer } from '@sketchpixy/rubix'

import Sidebar from '../components/sidebar'
import Header from '../components/header'
import Body from '../components/Body'
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
        <body className="pace-big">
          {this.props.customValue}
          <MainContainer {...this.props}>
            <Sidebar pathname={this.props.pathname} />
            <Header {...this.props} />
            <Body />
            <Footer />
          </MainContainer>
          <NextScript />
        </body>
      </html>
    )
  }
}
