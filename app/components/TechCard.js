import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { Card } from './Card'
import { TechCardHeader } from './TechCardHeader'
import { ButtonGroup } from './ButtonGroup'
import * as actionCreators from '../store/action-creators'
import { connectToRepository } from '../connectors/connect-to-repository'

const submitUpVote = (submitVote, tech) => () => {
  submitVote(tech, { score: 1, comment: '' })
}

const submitDownVote = (submitVote, tech) => () => {
  submitVote(tech, { score: -1, comment: '' })
}

const submitViewVotes = (viewVotes, tech, repo) => () => {
  viewVotes(tech, repo)
}

const handleAddVoteClicked = (openAddVote, tech) => () => {
  openAddVote(tech)
}

export const TechCard = ({ tech, submitVote, openAddVote, viewVotes, repository }) => (
  <Card isInput={false}>
    <TechCardHeader name={tech.get('name')} score={tech.get('score')} />
    <ButtonGroup
      buttonDefinitions={
      [
        {
          class: 'vote-button upvote-button',
          onClick: submitUpVote(submitVote, tech),
          content: 'Vote Up!',
        },
        {
          class: 'vote-button downvote-button',
          onClick: submitDownVote(submitVote, tech),
          content: 'Vote Down!',
        },
      ]
      }
    />
    <ButtonGroup
      buttonDefinitions={
      [
        {
          class: 'view-votes-button',
          onClick: submitViewVotes(viewVotes, tech, repository),
          content: 'View Votes',
        },
        {
          class: 'add-comment-button',
          onClick: handleAddVoteClicked(openAddVote, tech),
          content: 'Add Comment',
        },
      ]
      }
    />
  </Card>
)

TechCard.propTypes = {
  tech: React.PropTypes.instanceOf(Map).isRequired,
  submitVote: React.PropTypes.func.isRequired,
  viewVotes: React.PropTypes.func.isRequired,
  openAddVote: React.PropTypes.func.isRequired,
  repository: React.PropTypes.object.isRequired,
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
)(connectToRepository(TechCard))
