import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { Card } from './Card'
import * as actionCreators from '../store/action-creators'

const techNameStyle = {
  fontWeight: 'bold',
}

const commentStyle = {
  width: '250px',
  height: '84px',
  resize: 'none',
  fontFamily: 'Helvetica',
  padding: '5px',
}

export class AddVote extends React.Component {

  submit() {
    const { currentVote, submitVote } = this.props
    const vote = { score: parseInt(this.form.score.value, 10), comment: this.form.comment.value }
    submitVote(currentVote.get('tech'), vote)
  }

  render() {
    const { currentVote, closeAddVote } = this.props
    const handleSubmit = () => this.submit()
    const setForm = f => {
      this.form = f
    }

    return (
    <Card isInput>
      <form ref={setForm}>
        Comment on <span style={techNameStyle}>{currentVote.getIn(['tech', 'name'])}</span>:<br />
        <textarea name="comment" style={commentStyle} /><br />
        <input type="radio" name="score" value="+1" defaultChecked />+1<br />
        <input type="radio" name="score" value="-1" />-1<br />
      </form>
      <button onClick={handleSubmit}>Submit Vote</button>
      <button onClick={closeAddVote}>Cancel</button>
    </Card>)
  }
}

AddVote.propTypes = {
  currentVote: React.PropTypes.instanceOf(Map).isRequired,
  submitVote: React.PropTypes.func.isRequired,
  closeAddVote: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    currentVote: state.get('currentVote'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    submitVote: actionCreators.submitVote,
    closeAddVote: actionCreators.closeAddVote,
  }, dispatch)
}

export const AddVoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVote)
