import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentGif from '../components/CurrentGif'
import Controls from '../components/Controls'

class GifPanel extends Component {

  showNext() {

  }

  showPrev() {

  }

  render() {
    <CurrentGif />
    const source = this.props.collection[this.props.currentIndex]
    return (
      <div>
        <CurrentGif gifSrc={source}/>
        <Controls showNext={this.showNext} showPrev={this.showPrev}/>
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

const mapDispatchToProps = (state) => {
  updateCurrentIndex: updateCurrentIndex
}

export default connect(mapStateToProps)(GifPanel)