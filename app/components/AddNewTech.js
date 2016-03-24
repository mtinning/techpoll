import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List } from 'immutable'

import { Card } from './Card'
import { TextInput } from './TextInput'
import { OptionInput } from './OptionInput'
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
    const handleCategoryChange = v => this.setState({ category: v })

    const handleSubmit = e => {
      e.preventDefault() // prevent browser submitting form
      const tech = this.state.tech.trim()
      const categoryType = this.state.category.trim()
      if (!tech || !categoryType) {
        return
      }

      const newTechItem = {
        name: tech,
        id: `${tech.toLowerCase()}_${categoryType}`,
        categoryId: categoryType,
        score: 0,
      }

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
        <h4>Add New Tech</h4>
        <Card isInput>
          <form name="addTechForm" onSubmit={handleSubmit}>
            <TextInput
              heading="Tech Name"
              placeholder="tech name"
              value={this.state.tech}
              onChange={handleTechChange}
              required
              warning={this.state.warning}
            />
            <OptionInput
              heading="Category"
              placeholder="choose one..."
              onChange={handleCategoryChange}
              value={this.state.category}
              required
              options={['web', 'back_end', 'dev_ops']}
            />
            <input type="submit" value="Post" />
          </form>
        </Card>
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
