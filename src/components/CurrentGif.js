import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import { enableSwipe } from '../lib/gestureLib'

class CurrentGif extends Component {

  setupHammerEvents() {
    const node = ReactDOM.findDOMNode(this)

    const directions = {
      2: this.props.next,
      4: this.props.prev
    }

    enableSwipe(node, directions)
  }

  componentDidMount() {
    this.setupHammerEvents()
  }

  render() {
    return <img src={this.props.gifSrc} />
  }
}

export default CurrentGif
