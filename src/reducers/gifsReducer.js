export default (state, action) => {

  const INITIAL_STATE = {
    collection: ['http://media4.giphy.com/media/fZNQv37Zv51iU/giphy.gif',
                 'http://media4.giphy.com/media/o0vwzuFwCGAFO/giphy.gif',
                 'https://media.giphy.com/media/kSCB3oEcIpwRO/giphy.gif'],
    currentIndex: 0
  }

  const next = (currentIndex, collectionLength) => {
    if(currentIndex === collectionLength - 1) return currentIndex
    return currentIndex + 1
  }

  const prev = (currentIndex) => {
    if(currentIndex === 0) return currentIndex
    return currentIndex - 1
  }

  switch(action.type) {

    case 'NEXT':
      return {
        ...state,
        currentIndex: next(state.currentIndex, state.collection.length)
      }
    case 'PREV':
      return {
        ...state,
        currentIndex: prev(state.currentIndex, state.collection.length)
      }
  }
  return INITIAL_STATE
}
