import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'
import { ActiveVoteListContainer } from './ActiveVoteList'
import { AddVoteContainer } from './AddVote'
import { ColumnView } from './ColumnView'

export const TechPoll = ({ isAddVoteVisible, isActiveVotesVisible }) => (
  <div>
    <ColumnView className="tech-poll">
      <TechCategoryListContainer />
      <AddNewTechContainer />
      { isActiveVotesVisible ? <ActiveVoteListContainer /> : null }
      { isAddVoteVisible ? <AddVoteContainer /> : null }
    </ColumnView>
  </div>
)

function mapStateToProps(state) {
  return {
    isActiveVotesVisible: state.has('activeVotes'),
    isAddVoteVisible: state.has('currentVote'),
  }
}

TechPoll.propTypes = {
  isAddVoteVisible: React.PropTypes.bool.isRequired,
  isActiveVotesVisible: React.PropTypes.bool.isRequired,
}

export const TechPollContainer = connect(
  mapStateToProps
)(TechPoll)
