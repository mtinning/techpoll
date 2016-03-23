import React from 'react'

const techNameStyle = {
  fontWeight: 'bold',
}

const techScoreStyle = {
  fontWeight: 'bold',
  float: 'right',
  fontSize: '24px',
}

export const TechCardHeader = ({ name, score }) => (
  <div className="score-header">
    <span className="tech-name" style={techNameStyle}>{name}</span>
    <span className="tech-score" style={techScoreStyle}>{score}</span>
  </div>
)

TechCardHeader.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}
