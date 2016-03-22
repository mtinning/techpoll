import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'
import { AddVoteContainer } from './AddVote'

const techPollStyle = {
  display: 'flex',
}

const techListContainerStyle = {

}

const addVoteContainerStyle = {
  display: 'flex',
  flexDirection: 'vertical',
  margin: '0 auto',
  alignItems: 'center',
}

export const TechPoll = ({ addVoteOpen }) => (
  <div>
    <h2>{'TechPoll'}</h2>
    <div className="tech-poll" style={techPollStyle}>
      <div className="tech-list-container" style={techListContainerStyle}>
        <TechCategoryListContainer />
        <AddNewTechContainer />
      </div>
      <div className="add-vote-list-vote-container" style={addVoteContainerStyle}>
        { addVoteOpen ? <AddVoteContainer /> : null }
      </div>
    </div>
  </div>
)

TechPoll.propTypes = {
  addVoteOpen: React.PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  return {
    addVoteOpen: state.has('currentVote'),
  }
}

export const TechPollContainer = connect(
  mapStateToProps
)(TechPoll)
