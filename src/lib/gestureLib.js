
import Hammer from 'hammerjs'

const enableSwipe = (node, directionsMapping) => {
  const hammer = new Hammer(node)
  const directions = new Map()

  for(const key of Object.keys(directionsMapping)) {
    directions.set(Number(key), directionsMapping[key])
  }

  hammer.on('swipe', (ev) => {
    directions.get(ev.direction)()
  })
}

export {
  enableSwipe
}
