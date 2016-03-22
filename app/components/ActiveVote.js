import React from 'react'
import { Map } from 'immutable'

import { Card } from './Card'

export const ActiveVote = ({ activeVote }) => (
  <Card isInput={false}>
    <div>Score: {activeVote.get('score')}</div>
    <div>Comment: {activeVote.get('comment')}</div>
  </Card>
)

ActiveVote.propTypes = {
  activeVote: React.PropTypes.instanceOf(Map).isRequired,
}
