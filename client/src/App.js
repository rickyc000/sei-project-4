import React from 'react'
import Home from './components/common/Home'
class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/releases/')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return <div>
      <Home />
      <h1>Hello there</h1>
    </div>
  }
}

// function App() {

//   const [releases, setReleases] = React.useState(null)
//   const [hasError, setHasError] = React.useState(false)

//   React.useEffect(() => {
//     const getReleases = async () => {
//       try {
//         const { data } = await getAllReleases()
//         setReleases(data)

//       } catch (err) {
//         console.log(err)
//         setHasError(true)
//       }
//     }
//     getReleases()
//   }, [])

//   console.log(releases)
//   console.log(hasError)


// }

export default App
