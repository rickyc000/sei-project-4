import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/resource-name')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <h1>Hello there</h1>
  }
}

export default App
