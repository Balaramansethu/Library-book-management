import React from 'react'
import DisplayBooksComponent from './components/DisplayBooksComponent/DisplayBooksComponent'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import DummyComponent from './components/DummyComponent'

const App = () => {
  return (
    <React.Fragment>
      <NavigationComponent/>
      {/* <DummyComponent/> */}
    </React.Fragment>
  )
}

export default App