import React from 'react'

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top',
}

const columnStyle = {
  margin: '0 15px',
}

export const ColumnView = (props) => (
  <div style={style}>
    {
      props.children
        .filter(c => !!c)
        .map((c, i) => <div style={columnStyle} key={`column-${i}`}>{c}</div>)
    }
  </div>
)

ColumnView.propTypes = {
  children: React.PropTypes.array.isRequired,
}
