import React from 'react';
import TouchEvents from 'react-touch-events'

export default class WorkArea extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posX: 0,
      posY: 0
    }
  }

  handleSwipe (direction) {
    console.log('swiped 2 ', direction)
    switch (direction) {
      case 'right':
        console.log('RIGHT', this.state.posX)
        this.setState({
          posX: this.state.posX - 1
        })
        break
      case 'left':
        this.setState({
          posX: this.state.posX + 1
        })
        break

      console.log(state.posX)
    }

  }

  xPos () {
    return this.state.posX * this.props.width
  }

  render () {
      console.log('RENDEREING', this.xPos())
    const wrapperStyle = {
      height: '1000px',
      width: '2000px',
      transform: `translate3d(-${this.xPos()}px, 0px, 0)`,
      transition: 'transform .5s ease-in-out'
    }

    return (
      <TouchEvents onSwipe={::this.handleSwipe}>
        <div style={{width: `${this.props.width}px`, height: `${this.props.height}px`, overflow: 'hidden'}}>
          <div style={wrapperStyle}>
            {this.props.children}
          </div>
        </div>
      </TouchEvents>
    )
  }
}

WorkArea.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
}