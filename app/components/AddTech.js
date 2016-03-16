import React from 'react'

export class AddTech extends React.Component {
  render() {
    return (
      <div>
        <form name="addTechForm" ref={r => this.form = r}>
          Tech: <input type="text" name="tech" /><br />
          Category: <select id="category">
            <option>Web</option>
            <option>Backend</option>
          </select><br />
          <input type="button" name="button" value ="Add" onClick={() => addTechClick(this.form, this.props.addTech)}/>
        </form>
      </div>
    )
  }
}

function addTechClick(form, addTech) {
  var newTechItem = { name: form.tech.value, category: form.category.value, score: 0 }
  addTech(newTechItem)
}
