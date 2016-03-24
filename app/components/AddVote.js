import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import CardHeader from 'material-ui/lib/card/card-header'

import { Card } from './Card'
import { OptionInput } from './OptionInput'
import { TextInput } from './TextInput'
import { ButtonGroup } from './ButtonGroup'
import * as actionCreators from '../store/action-creators'

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
    <Card
      isInput
      header={<CardHeader title={`Comment on ${currentVote.getIn(['tech', 'name'])}`} />}
    >
      <form ref={setForm}>
        <TextInput name="comment" type="multiline" /><br />
        <OptionInput type="radio" name="score" value="+1" options={['+1', '-1']} heading="Score" />
      </form>
      <ButtonGroup buttonDefinitions={
        [
          {
            onClick: handleSubmit,
            content: 'Submit Vote',
          },
          {
            onClick: closeAddVote,
            content: 'Cancel',
          },
        ]
      }
      />
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
