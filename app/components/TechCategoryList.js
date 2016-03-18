import React from 'react'
import { connect } from 'react-redux'

import { TechCategory } from './TechCategory'

export const TechCategoryList = ({ techList }) => {
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
        />
        )}
    </div>
  )
}

TechCategoryList.propTypes = {
  techList: React.PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    techList: state.get('tech').toJS(),
  }
}

export const TechCategoryListContainer = connect(
  mapStateToProps
)(TechCategoryList)
