import React from 'react'
import { TechList } from './TechList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

const TechPoll = ({ tech, submitVote }) => (
    <div>
      <h2>{'TechPoll'}</h2>
      <TechList techList={tech} submitVote={submitVote} />
    </div>
  )

TechPoll.propTypes = {
  tech: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
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
