import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'
import { AddVoteContainer } from './AddVote'

export const TechPoll = ({ addVoteOpen }) => (
  <div>
    <h2>{'TechPoll'}</h2>
    <TechCategoryListContainer />
    <AddNewTechContainer />
    { addVoteOpen ? <AddVoteContainer /> : null }
  </div>
)

function mapStateToProps(state) {
  return {
    addVoteOpen: state.has('currentVote')
  }
}

export const TechPollContainer = connect(
  mapStateToProps
)(TechPoll)
