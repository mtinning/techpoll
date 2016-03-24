import React from 'react'

import CardHeader from 'material-ui/lib/card/card-header'

const techScoreStyle = {
  fontWeight: 'bold',
  float: 'right',
  fontSize: '24px',
  verticalAlign: 'top',
}

export const TechCardHeader = ({ name, score }) => (
  <CardHeader className="score-header"
    title={<span className="tech-name">{name}</span>}
  >
    <div className="tech-score" style={techScoreStyle}>{score}</div>
  </CardHeader>
)

TechCardHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}
