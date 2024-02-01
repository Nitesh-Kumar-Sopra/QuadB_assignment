import Nav from "./component/Nav"
import Home from './pages/Home'
import Details from './pages/Details'
import {Routes,Route} from 'react-router-dom'
import Form from "./pages/Form"
const App = () => {
  

  return (
    <>
      <Nav/>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/Form" element={<Form/>}/>

      </Routes>
    </>
  )
}

export default App