import React from 'react'

function techExists(tech, item) {
  return tech.findIndex(t => t.name === item.name) >= 0
}

export class AddNewTech extends React.Component {

  constructor() {
    super()
    this.state = { tech: '', category: '', warning: '' }
  }

  render() {
    const handleTechChange = e => this.setState({ tech: e.target.value })
    const handleCategoryChange = e => this.setState({ category: e.target.value })

    const handleSubmit = e => {
      e.preventDefault() // prevent browser submitting form
      const tech = this.state.tech.trim()
      const categoryType = this.state.category.trim()
      if (!tech || !categoryType) {
        return
      }
      const newTechItem = { name: tech, category: categoryType, score: 0 }

      // reject item if it already exists
      if (techExists(this.props.tech, newTechItem)) {
        this.setState({ warning: `Tech \'${tech}\' already exists!` })
        return
      }
      // add new item using supplied action creator
      this.props.addNewTech(newTechItem)
      // clear form
      this.setState({ tech: '', category: '', warning: '' })
    }

    return (
      <div>
        <form name="addTechForm" onSubmit={handleSubmit}>
          Tech:
            <input type="text"
              placeholder="tech name"
              value={this.state.tech}
              onChange={handleTechChange}
              required
            />
            <font color="red"><strong>{this.state.warning}</strong></font>
            <br />
          Category:
            <select id="category"
              value={this.state.category}
              onChange={handleCategoryChange}
              required
            >
                <option value="" disabled>choose one...</option>
                <option>Web</option>
                <option>Backend</option>
            </select>
            <br />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

AddNewTech.propTypes = {
  tech: React.PropTypes.array.isRequired,
  addNewTech: React.PropTypes.func.isRequired,
}
