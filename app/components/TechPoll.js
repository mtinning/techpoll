import React from 'react'
import { AddNewTech } from './AddNewTech'
import { TechCategoryList } from './TechCategoryList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

const TechPoll = ({ tech, submitVote, addNewTech }) => (
    <div>
      <h2>{'TechPoll'}</h2>
      <TechCategoryList techList={tech} submitVote={submitVote} />
      <AddNewTech tech={tech} addNewTech={addNewTech} />
    </div>
  )

TechPoll.propTypes = {
  tech: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
  addNewTech: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    tech: state.get('tech').toJS(),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export const TechPollContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TechPoll)
