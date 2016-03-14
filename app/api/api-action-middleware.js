import $ from 'jquery'

export default store => next => action => {
  switch (action.type) {
    case 'VOTE':
      console.log('A vote happened!')
  }
  return next(action)
}
