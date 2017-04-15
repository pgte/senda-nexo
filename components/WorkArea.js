import React from 'react';
import TouchEvents from 'react-touch-events'

export default class WorkArea extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posX: 0
    }
  }

  handleSwipe (direction) {
    switch (direction) {
      case 'right':
        if (this.state.posX > 0) {
          this.setState({
            posX: this.state.posX - 1
          })
        }
        break
      case 'left':
        if (this.state.posX < (this.children().length - 1)) {
          this.setState({
            posX: this.state.posX + 1
          })
        }
        break
    }

  }

  children () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children]
  }

  xPos () {
    return this.state.posX * (this.props.width + this.props.margin)
  }

  render () {
    const wrapperStyle = {
      height: '40000px',
      width: `${(this.props.margin + this.props.width) * this.children().length}px`,
      transform: `translate3d(-${this.xPos()}px, 0px, 0)`,
      transition: 'transform .5s ease-in-out'
    }

    const childStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      overflow: 'hidden',
      float: 'left',
      whiteSpace: 'normal',
      marginRight: `${this.props.margin}px`
    }

    console.log(Array.isArray(this.props.children))

    const children = this.children()

    return (
      <TouchEvents onSwipe={::this.handleSwipe}>
        <div style={{width: `${this.props.width}px`, height: `${this.props.height}px`, overflow: 'hidden'}}>
          <div style={wrapperStyle}>
            {children.map(child => (
              <div style={childStyle}>
                {child}
              </div>
            ))}
          </div>
        </div>
      </TouchEvents>
    )
  }
}

WorkArea.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  margin: React.PropTypes.number
}

WorkArea.defaultProps = {
  margin: 10
}
