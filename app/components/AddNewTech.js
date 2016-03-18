import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { addNewTech } from '../store/action-creators'

function techExists(tech, item) {
  return tech.findIndex(t => t.get('name') === item.name) >= 0
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
      const newTechItem = { name: tech, categoryId: categoryType, score: 0 }

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
            {
              !!this.state.warning ?
              <span className="validation-error">{this.state.warning}</span> :
              null
            }
            <br />
          Category:
            <select id="category"
              value={this.state.category}
              onChange={handleCategoryChange}
              required
            >
                <option value="" disabled>choose one...</option>
                <option>web</option>
                <option>back_end</option>
                <option>dev_ops</option>
            </select>
            <br />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

AddNewTech.propTypes = {
  tech: React.PropTypes.instanceOf(List).isRequired,
  addNewTech: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    tech: state.get('tech'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewTech }, dispatch)
}

export const AddNewTechContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewTech)
