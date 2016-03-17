import React from 'react'
import { TechCategory } from './TechCategory'

export const TechCategoryList = ({ techList, submitVote }) => {
  const appendItem = (categories, item) => {
    const update = {}
    if (item.categoryId in categories) {
      update[item.categoryId] = [...categories[item.categoryId], item]
    } else {
      update[item.categoryId] = [item]
    }

    return Object.assign({}, categories, update)
  }

  const categories = techList.reduce(appendItem, {})

  return (
    <div>
      {Object.keys(categories).map(c =>
        <TechCategory
          key={`category-${c}`}
          categoryName={c}
          techList={categories[c]}
          submitVote={submitVote}
        />
        )}
    </div>
  )
}

TechCategoryList.propTypes = {
  techList: React.PropTypes.array.isRequired,
  submitVote: React.PropTypes.func.isRequired,
}
