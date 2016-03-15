import React from 'react'
import {TechCard} from './TechCard'
import {NewTech} from './NewTech'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../store/action-creators'

export class TechPoll extends React.Component {
  render() {

    var techList = this.props.tech
      .sort((a, b) => b.get('score') - a.get('score'))
      .map(t => <TechCard key={t.get('name')} tech={t} vote={this.props.vote}></TechCard>)

    return (
      <div>
        <h2>{'TechPoll'}</h2>
        {techList}
        <NewTech newTech={this.props.newTech}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tech: state.get('tech')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export const TechPollContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TechPoll)
