import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { TechCategory } from './TechCategory'

export const TechCategoryList = ({ techList }) => {
  const categories = techList.groupBy(tech => tech.get('categoryId'))
  return (
    <div>
      {categories.keySeq().map(c =>
        <TechCategory
          key={`category-${c}`}
          categoryName={c}
          techList={categories.get(c)}
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
