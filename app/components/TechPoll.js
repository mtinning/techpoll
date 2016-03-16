import React from 'react'
import {TechCard} from './TechCard'
import {AddTech} from './AddTech'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../store/action-creators'

export class TechPoll extends React.Component {
  render() {

    var techList = this.props.tech
      .sort((a, b) => b.score - a.score)
      .map(t => <TechCard key={t.name} tech={t} vote={this.props.vote}></TechCard>)
    return (
      <div>
        <h2>{'TechPoll'}</h2>
        {techList}
        <AddTech addTech={this.props.addTech}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tech: state.get('tech').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const TechPollContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TechPoll)
