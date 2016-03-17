import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

const submitUpVote = (submitVote, tech) => () => {
  submitVote(tech, { score: 1, comment: '' })
}

const submitDownVote = (submitVote, tech) => () => {
  submitVote(tech, { score: -1, comment: '' })
}

export const TechCard = ({ tech, submitVote }) => (
  <div>
    <div>{tech.name}</div>
    <div>Score: {tech.score}</div>
    <button onClick={submitUpVote(submitVote, tech)}>
      Vote Up!
    </button>
    <button onClick={submitDownVote(submitVote, tech)}>
      Vote Down!
    </button>
  </div>
)

TechCard.propTypes = {
  tech: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
  }).isRequired,
  submitVote: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitVote: actionCreators.submitVote }, dispatch)
}

export const TechCardContainer = connect(
  null,
  mapDispatchToProps
)(TechCard)
