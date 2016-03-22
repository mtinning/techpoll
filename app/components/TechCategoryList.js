import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { TechCategory } from './TechCategory'

const listStyle = {
  width: '300px',
}

export const TechCategoryList = ({ techList }) => {
  const appendItem = (categories, item) => {
    const update = {}
    const categoryId = item.get('categoryId')
    if (categoryId in categories) {
      update[categoryId] = categories[categoryId].push(item)
    } else {
      update[categoryId] = List.of(item)
    }

    return Object.assign({}, categories, update)
  }

  const categories = techList.reduce(appendItem, {})

  return (
    <div style={listStyle}>
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
  techList: React.PropTypes.instanceOf(List).isRequired,
}

function mapStateToProps(state) {
  return {
    techList: state.get('tech'),
  }
}

export const TechCategoryListContainer = connect(
  mapStateToProps
)(TechCategoryList)
