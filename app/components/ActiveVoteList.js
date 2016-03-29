import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List } from 'immutable'

import { ActiveVote } from './ActiveVote'
import { ButtonGroup } from './ButtonGroup'

import * as actionCreators from '../store/action-creators'

export const ActiveVoteList = ({ activeVotes, closeVotes, techName }) => (
    // currently using index for key value.
    // may want unique vote key in future if ordering is important
    <div>
      <h4>Votes for {techName}</h4>
      <div>
        {activeVotes.map((v, i) => <ActiveVote key={`active-vote-${i}`} activeVote={v} />)}
      </div>
      <ButtonGroup buttonDefinitions={[{ onClick: closeVotes, content: 'Close' }]} />
    </div>
  )

ActiveVoteList.propTypes = {
  activeVotes: React.PropTypes.instanceOf(List).isRequired,
  closeVotes: React.PropTypes.func.isRequired,
  techName: React.PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  const techId = state.getIn(['activeVotes', 'techId'])
  const tech = state.get('tech').find(v => v.get('id') === techId)
  return {
    activeVotes: state.getIn(['activeVotes', 'votes']),
    techName: tech.get('name'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    closeVotes: actionCreators.closeVotes,
  }, dispatch)
}

export const ActiveVoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveVoteList)
