import React from 'react'
import { TechCardContainer } from './TechCard'

export const TechList = ({ techList }) => (
  <div>
    {techList.map(t => <TechCardContainer key={t.name} tech={t} />)}
  </div>
)

TechList.propTypes = {
  techList: React.PropTypes.array.isRequired,
}

export const SortedTechList = ({ techList }) => (
  <TechList techList={ techList.sort((a, b) => b.score - a.score) } />)

SortedTechList.propTypes = {
  techList: React.PropTypes.array.isRequired,
}
