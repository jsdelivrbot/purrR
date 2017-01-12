import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import CurrentGif from '../components/CurrentGif'
import Controls from '../components/Controls'

import { next, prev } from '../actions/index.js'

class GifPanel extends Component {

  render() {
    <CurrentGif />
    const source = this.props.collection[this.props.currentIndex]
    return (
      <div>
        <CurrentGif gifSrc={source}/>
        <Controls next={this.props.next} prev={this.props.prev}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.gifs.currentIndex,
    collection: state.gifs.collection
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  {
    next,
    prev
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GifPanel)
