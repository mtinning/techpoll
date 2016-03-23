import React from 'react'
import { List } from 'immutable'

import { TechCardContainer } from './TechCard'

export const TechList = ({ techList }) => (
  <div>
    {techList.map(t => <TechCardContainer key={t.get('name')} tech={t} />)}
  </div>
)

TechList.propTypes = {
  techList: React.PropTypes.instanceOf(List).isRequired,
}
