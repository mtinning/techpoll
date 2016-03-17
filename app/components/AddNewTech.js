import React from 'react'

export class AddNewTech extends React.Component {

  constructor() {
    super();
    this.state = {tech: '', category: ''};
  }

  render() {
    const handleTechChange = e => this.setState({tech: e.target.value});
    const handleCategoryChange = e => this.setState({category: e.target.value});

    const handleSubmit = e => {
      e.preventDefault(); // prevent browser submitting form
      let tech = this.state.tech.trim();
      let category = this.state.category.trim();
      if (!tech || !category) {
        return;
      }
      // add new item using supplied action creator
      var newTechItem = { name: tech, category: category, score: 0 }
      this.props.addNewTech(newTechItem)
      // clear form
      this.setState({tech: '', category: ''});
    }

    return (
      <div>
        <form name="addTechForm" onSubmit={handleSubmit}>
          Tech: <input type="text" placeholder="tech name" value={this.state.tech} onChange={handleTechChange}/><br />
          Category: <select id="category" value={this.state.category} onChange={handleCategoryChange}>
            <option value="" disabled>choose one...</option>
            <option>Web</option>
            <option>Backend</option>
          </select><br />
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

//function addTechClick(form, addTech) {
//  var newTechItem = { name: form.tech.value, category: form.category.value, score: 0 }
//  addTech(newTechItem)
//}
