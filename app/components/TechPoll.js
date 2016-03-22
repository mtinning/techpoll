import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'

import { ActiveVoteListContainer } from './ActiveVoteList'
import { AddVoteContainer } from './AddVote'

export const TechPoll = ({ addVoteOpen, isActiveVotesVisible }) => (
  <div>
    <h2>{'TechPoll'}</h2>
    <TechCategoryListContainer />
    { isActiveVotesVisible ? <ActiveVoteListContainer /> : null }
    <AddNewTechContainer />
    { addVoteOpen ? <AddVoteContainer /> : null }
  </div>
)

function mapStateToProps(state) {
  return {
    isActiveVotesVisible: state.has('activeVotes'),
    addVoteOpen: state.has('currentVote'),
  }
}

TechPoll.propTypes = {
  addVoteOpen: React.PropTypes.bool.isRequired,
  isActiveVotesVisible: React.PropTypes.bool.isRequired,
}

export const TechPollContainer = connect(
  mapStateToProps
)(TechPoll)
