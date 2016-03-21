import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'
import { ActiveVoteListContainer } from './ActiveVoteList'

export const TechPoll = ({ isActiveVotesVisible }) => (
  <div>
    <h2>{'TechPoll'}</h2>
    <TechCategoryListContainer />
    { isActiveVotesVisible ? <ActiveVoteListContainer /> : null }
    <AddNewTechContainer />
  </div>
)

function mapStateToProps(state) {
  return {
    isActiveVotesVisible: state.has('activeVotes'),
  }
}

export const TechPollContainer = connect(
  mapStateToProps
)(TechPoll)

TechPoll.propTypes = {
  isActiveVotesVisible: React.PropTypes.bool.isRequired,
}
