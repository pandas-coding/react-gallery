import './App.css'
import AppAsyncComponent from './components/AppAsyncComponent'
import AppChildren from './components/AppChildren'
import { AppHOC } from './components/AppHOC'

function App() {

  return (
    <>
      {/*<AppAsyncComponent />*/}
      {/*<AppChildren/>*/}
      <AppHOC/>
    </>
  )
}

export default App
