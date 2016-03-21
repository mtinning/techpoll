import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List } from 'immutable'

import { ActiveVote } from './ActiveVote'

import * as actionCreators from '../store/action-creators'

const submitCloseVotes = (closeVotes) => () => {
  closeVotes()
}


export const ActiveVoteList = ({ activeVotes, closeVotes }) => {
  if (activeVotes) {
    // currently using index for key value.
    // may want unique vote key in future if ordering is important
    return (
      <div>
        <div>
          {activeVotes.map((v, i) => <ActiveVote key={`active-vote-${i}`} activeVote={v} />)}
        </div>
        <div>
          <button onClick={submitCloseVotes(closeVotes)}>
            Close
          </button>
        </div>
      </div>
    )
  }

  return null
}

ActiveVoteList.propTypes = {
  activeVotes: React.PropTypes.instanceOf(List).isRequired,
  closeVotes: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    activeVotes: state.get('activeVotes'),
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
