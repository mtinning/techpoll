import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import * as actionCreators from '../store/action-creators'

const submitUpVote = (submitVote, tech) => () => {
  submitVote(tech, { score: 1, comment: '' })
}

const submitDownVote = (submitVote, tech) => () => {
  submitVote(tech, { score: -1, comment: '' })
}

const submitViewVotes = (viewVotes, tech) => () => {
  viewVotes(tech)
}

const handleAddVoteClicked = (openAddVote, tech) => () => {
  openAddVote(tech)
}

export const TechCard = ({ tech, submitVote, openAddVote, viewVotes }) => (
    <div>
      <div className="tech-name">{tech.get('name')}</div>
      <div className="tech-score">Score: {tech.get('score')}</div>
      <button
        className="button vote-button upvote-button"
        onClick={submitUpVote(submitVote, tech)}
      >
        Vote Up!
      </button>
      <button
        className="button vote-button downvote-button"
        onClick={submitDownVote(submitVote, tech)}
      >
        Vote Down!
      </button>
      <button onClick={submitViewVotes(viewVotes, tech)}>
        View Votes
      </button>
      <button onClick={handleAddVoteClicked(openAddVote, tech)}>
        Add Comment
      </button>
    </div>
  )

TechCard.propTypes = {
  tech: React.PropTypes.instanceOf(Map).isRequired,
  submitVote: React.PropTypes.func.isRequired,
  viewVotes: React.PropTypes.func.isRequired,
  openAddVote: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitVote: actionCreators.submitVote,
    viewVotes: actionCreators.viewVotes,
    openAddVote: actionCreators.openAddVote,
  }, dispatch)
}

export const TechCardContainer = connect(
  null,
  mapDispatchToProps
)(TechCard)
