import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { Card } from './Card'
import * as actionCreators from '../store/action-creators'

const submitUpVote = (submitVote, tech) => () => {
  submitVote(tech, { score: 1, comment: '' })
}

const submitDownVote = (submitVote, tech) => () => {
  submitVote(tech, { score: -1, comment: '' })
}

const handleAddVoteClicked = (openAddVote, tech) => () => {
  openAddVote(tech)
}

const buttonContainerStyle = {
  margin: '5px 0',
}

const techNameStyle = {
  fontWeight: 'bold',
}

const techScoreStyle = {
  fontWeight: 'bold',
  float: 'right',
  fontSize: '24px',
}

export const TechCard = ({ tech, submitVote, openAddVote }) => (
  <Card isInput={false}>
    <div className="score-header">
      <span className="tech-name" style={techNameStyle}>{tech.get('name')}</span>
      <span className="tech-score" style={techScoreStyle}>{tech.get('score')}</span>
    </div>
    <div className="votes" style={buttonContainerStyle}>
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
    </div>
    <div className="open-add-comment-container" style={buttonContainerStyle}>
      <button onClick={handleAddVoteClicked(openAddVote, tech)}>
        Add Comment
      </button>
    </div>
  </Card>
)

TechCard.propTypes = {
  tech: React.PropTypes.instanceOf(Map).isRequired,
  submitVote: React.PropTypes.func.isRequired,
  openAddVote: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitVote: actionCreators.submitVote,
    openAddVote: actionCreators.openAddVote,
  }, dispatch)
}

export const TechCardContainer = connect(
  null,
  mapDispatchToProps
)(TechCard)
