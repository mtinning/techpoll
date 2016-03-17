import React from 'react'
import { TechCard } from './TechCard'

export const TechList = ({ techList, submitVote }) => (
  <div>
    {techList.map(t => <TechCard key={t.name} tech={t} submitVote={submitVote} />)}
  </div>
)

TechList.propTypes = {
  techList: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
}

export const SortedTechList = ({ techList, submitVote }) => (
  <TechList techList={ techList.sort((a, b) => b.score - a.score) } submitVote={ submitVote } />)

SortedTechList.propTypes = {
  techList: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
}
