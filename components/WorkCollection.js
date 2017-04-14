import React from 'react';
import TouchEvents from 'react-touch-events'

export default class WorkCollection extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      posY: 0
    }
  }

  handleSwipe (direction) {
    switch (direction) {
      case 'top':
        if (this.state.posY < (this.children().length - 1)) {
          this.setState({
            posY: this.state.posY + 1
          })
        }
        break
      case 'bottom':
        if (this.state.posY > 0) {
          this.setState({
            posY: this.state.posY - 1
          })
        }
          break
    }

  }

  children () {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children]
  }

  yPos () {
    return this.state.posY * (this.props.height + this.props.margin)
  }

  render () {
    const wrapperStyle = {
      height: '2000px',
      width: `${this.props.width}px`,
      transform: `translate3d(0px, -${this.yPos()}px, 0)`,
      transition: 'transform .5s ease-in-out'
    }

    const childStyle = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      overflow: 'hidden',
      whiteSpace: 'normal',
      marginBottom: `${this.props.margin}px`
    }

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

WorkCollection.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  margin: React.PropTypes.number
}

WorkCollection.defaultProps = {
  margin: 10
}
