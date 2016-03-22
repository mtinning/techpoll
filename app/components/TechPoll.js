import React from 'react'
import { connect } from 'react-redux'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'

import { ActiveVoteListContainer } from './ActiveVoteList'
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

const columnStyle = {
  margin: '0 15px',
}

export const TechPoll = ({ isAddVoteVisible, isActiveVotesVisible }) => (
  <div>
    <h2>{'TechPoll'}</h2>
    <div className="tech-poll" style={techPollStyle}>
      <div className="tech-list-container" style={techListContainerStyle}>
        <TechCategoryListContainer />
        <AddNewTechContainer />
      </div>
      <div className="add-vote-list-vote-container" style={addVoteContainerStyle}>
        { isActiveVotesVisible ? <div style={columnStyle}><ActiveVoteListContainer /></div> : null }
        { isAddVoteVisible ? <div style={columnStyle}><AddVoteContainer /></div> : null }
      </div>
    </div>
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
