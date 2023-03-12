import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {activeContent: true, activeLeft: true, activeRight: true}

  contentDisplay = () => {
    this.setState(each => ({
      activeContent: !each.activeContent,
    }))
  }

  leftDisplay = () => {
    this.setState(each => ({
      activeLeft: !each.activeLeft,
    }))
  }

  rightDisplay = () => {
    this.setState(each => ({
      activeRight: !each.activeRight,
    }))
  }

  render() {
    const {activeContent, activeLeft, activeRight} = this.state
    return (
      <>
        <ConfigurationController
          activeContent={activeContent}
          contentDisplay={this.contentDisplay}
          leftDisplay={this.leftDisplay}
          rightDisplay={this.rightDisplay}
        />
        <Layout
          contentDisplay={this.contentDisplay}
          activeContent={activeContent}
          activeLeft={activeLeft}
          activeRight={activeRight}
        />
      </>
    )
  }
}

export default App
