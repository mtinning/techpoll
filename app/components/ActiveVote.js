import React from 'react'
import { Map } from 'immutable'

export const ActiveVote = ({ activeVote }) => (
  <div>
    <div>Score: {activeVote.get('score')}</div>
    <div>Comment: {activeVote.get('comment')}</div>
  </div>
)

ActiveVote.propTypes = {
  activeVote: React.PropTypes.instanceOf(Map).isRequired,
}
