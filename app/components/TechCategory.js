import React from 'react'
import { List } from 'immutable'

import { TechList } from './TechList'

export const TechCategory = ({ categoryName, techList }) => (
  <div>
    <h4>{categoryName}</h4>
    <TechList techList={techList} />
  </div>
)

TechCategory.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  techList: React.PropTypes.instanceOf(List).isRequired,
}
