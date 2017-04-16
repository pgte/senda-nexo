import React from 'react'

export default class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 550,
      width: 300
    }

    if (process.browser) {
      this._sizeQueryInterval = setInterval(::this.querySize, 500)
    }
  }

  querySize () {
    const viewport = document.documentElement

    const header = document.getElementById('rubix-nav-header')
    const sidebar = document.getElementById('sidebar')
    const footer = document.getElementById('footer-container')

    // const height = 300;
    // const width = 550;
    if (!viewport || !header || !sidebar || !footer) {
      return
    }
    const width = viewport.clientWidth - sidebar.clientWidth - 50
    const height = viewport.clientHeight - header.clientHeight - footer.clientHeight -  50

    if (height != this.state.height) {
      this.setState({ height: height })
    }
    if (width != this.state.width) {
      this.setState({ width: width })
    }
  }

  componentWillUnmount () {
    if (this._sizeQueryInterval) {
      clearInterval(this._sizeQueryInterval)
    }
  }
}
