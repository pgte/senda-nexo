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
    const width = viewport.clientWidth - sidebar.clientWidth - 50
    const height = viewport.clientHeight - header.clientHeight - footer.clientHeight -  50

    if (height != this.state.height) {
      this.setState({ height: height })
    }
    if (width != this.state.width) {
      this.setState({ width: width })
    }
  }

  componentDidUnmount () {
    clearInterval(this._sizeQueryInterval)
    console.log('3 COMPONENT DID UNMOUNT')
  }
}
