import React from 'react'
import { TechList } from './TechList'

export const TechCategory = ({ categoryName, techList, submitVote }) => (
  <div>
    <h4>{categoryName}</h4>
    <TechList techList={techList} submitVote={submitVote} />
  </div>
)

TechCategory.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  techList: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
}
