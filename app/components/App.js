import React from 'react'
import {List, Map} from 'immutable'

const react = Map({'name': 'React', 'category': 'Web Front-End' })
const angular14 = Map({'name': 'Angular 1.4', 'category': 'Web Front-End'})
const angular2 = Map({'name': 'Angular 2', 'category': 'Web Front-End'})
const aurelia = Map({'name': 'Aurelia', 'category': 'Web Front-End'})

const tech = List.of(react, angular14, angular2, aurelia)

const categories = List.of('Web Front-End', 'Web Back-End')

export class App extends React.Component {
  render() {
    return React.cloneElement(this.props.children, {
      tech: tech,
      categories: categories
    })
    //return this.props.children
  }
}
