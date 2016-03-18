import React from 'react'

import { TechCategoryListContainer } from './TechCategoryList'
import { AddNewTechContainer } from './AddNewTech'

export const TechPoll = () => (
  <div>
    <h2>{'TechPoll'}</h2>
    <TechCategoryListContainer />
    <AddNewTechContainer />
  </div>
)
